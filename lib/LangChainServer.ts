import "cheerio";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { Document } from "@langchain/core/documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { pull } from "langchain/hub";
import { Annotation, StateGraph } from "@langchain/langgraph";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatGroq } from "@langchain/groq";



// Load and chunk contents of blog
const pTagSelector = "p";
const cheerioLoader = new CheerioWebBaseLoader(
  "https://lilianweng.github.io/posts/2023-06-23-agent/",
  {
    selector: pTagSelector
  }
);

// for embedding configuration
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large"
});


const docs = await cheerioLoader.load();


// for vector store configuration
const vectorStore = new MemoryVectorStore(embeddings);

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000, chunkOverlap: 200
});


const allSplits = await splitter.splitDocuments(docs);


// Index chunks
await vectorStore.addDocuments(allSplits);


// for Groq configuration
const llm = new ChatGroq({     // changed the name from 'llm' to 'groq'
  model: "llama-3.3-70b-versatile",
  temperature: 0
});

// Define prompt for question-answering
const promptTemplate = await pull<ChatPromptTemplate>("rlm/rag-prompt");

// Define state for application
const InputStateAnnotation = Annotation.Root({
  question: Annotation<string>,
});

const StateAnnotation = Annotation.Root({
  question: Annotation<string>,
  context: Annotation<Document[]>,
  answer: Annotation<string>,
});

// Define application steps
const retrieve = async (state: typeof InputStateAnnotation.State) => {
  const retrievedDocs = await vectorStore.similaritySearch(state.question)
  return { context: retrievedDocs };
};


const generate = async (state: typeof StateAnnotation.State) => {
  const docsContent = state.context.map(doc => doc.pageContent).join("\n");
  const messages = await promptTemplate.invoke({ question: state.question, context: docsContent });
  const response = await llm.invoke(messages);
  return { answer: response.content };
};


// Compile application and test
const graph = new StateGraph(StateAnnotation)
  .addNode("retrieve", retrieve)
  .addNode("generate", generate)
  .addEdge("__start__", "retrieve")
  .addEdge("retrieve", "generate")
  .addEdge("generate", "__end__")
  .compile();

;

console.assert(docs.length === 1);
console.log(`Total characters: ${docs[0].pageContent.length}`);

// for example integration
const example_prompt = await promptTemplate.invoke({
  context: "(context goes here)",
  question: "(question goes here)",
});
const example_messages = example_prompt.messages;

// for running without using langchain
let question = "...";

const retrievedDocs = await vectorStore.similaritySearch(question);
const docsContent = retrievedDocs.map((doc) => doc.pageContent).join("\n");
const messages = await promptTemplate.invoke({
  question: question,
  context: docsContent,
});
const answer = await llm.invoke(messages);

// for invocation testing
let inputs = { question: "What is Task Decomposition?" };

const result = await graph.invoke(inputs);
console.log(result.context.slice(0, 2));
console.log(`\nAnswer: ${result["answer"]}`);

///////////////////////////
console.assert(example_messages.length === 1);
example_messages[0].content;
console.log(answer);



