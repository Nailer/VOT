'use server'
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  MessagesPlaceholder,
  SystemMessagePromptTemplate,
} from "@langchain/core/prompts";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { RecallAgentToolkit } from "@recallnet/agent-toolkit/langchain";
import * as dotenv from "dotenv";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatGroq } from "@langchain/groq"
import { MemoryVectorStore } from "langchain/vectorstores/memory";
 
// Load environment variables
dotenv.config();
 
const { RECALL_PRIVATE_KEY, RECALL_NETWORK, OPENAI_API_KEY } = process.env;
if (!RECALL_PRIVATE_KEY || !OPENAI_API_KEY) {
  throw new Error(`Missing required environment variables: RECALL_PRIVATE_KEY and OPENAI_API_KEY`);
}

// for langchain configuration
const llms = new ChatOpenAI();
await llms.invoke("Hello, world!");

// for Groq configuration
const groq = new ChatGroq({     // changed the name from 'llm' to 'groq'
  model: "llama-3.3-70b-versatile",
  temperature: 0
});

// for embedding configuration
const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-large"
});

// for vector store configuration
const vectorStore = new MemoryVectorStore(embeddings);
 
// Initialize the language model
const llm = new ChatOpenAI({
  model: "gpt-4o",
  apiKey: OPENAI_API_KEY,
  temperature: 0.7,
});
 
// Create the Recall toolkit with configuration
console.log('RECALL_PRIVATE_KEY:', process.env.RECALL_PRIVATE_KEY);
const recallToolkit = new RecallAgentToolkit({
  privateKey: RECALL_PRIVATE_KEY,
  configuration: {
    actions: {
      account: {
        read: true,
        write: true,
      },
      bucket: {
        read: true,
        write: true,
      },
    },
    context: {
      network: RECALL_NETWORK || "testnet",
    },
  },
});
 
// Get LangChain-compatible tools
const tools = recallToolkit.getTools();
 
// Create a prompt template for the agent
const prompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are a helpful assistant with access to Recall storage capabilities. " +
      "1. You can create and manage storage buckets\n" +
      "2. You can store and retrieve information in buckets\n" +
      "3. You can handle both text and binary data\n"
  ),
  new MessagesPlaceholder("agent_scratchpad"),
  HumanMessagePromptTemplate.fromTemplate("{input}"),
]);

// Existing code...
 
async function main() {
  try {
    // Create the agent
    const agent = await createOpenAIFunctionsAgent({
      llm,
      tools,
      prompt,
    });
 
    // Create the executor
    const agentExecutor = new AgentExecutor({
      agent,
      tools,
    });
 
    // Define a task for the agent
    const task =
      "Create a bucket called 'memories', store a note with the key 'first-memory' and content 'This is my first memory', then retrieve that memory and summarize what you did.";
 
    console.log("Running the agent...");
    console.log("Task:", task);
    console.log("---------------------------------------------");
 
    // Run the agent
    const response = await agentExecutor.invoke({
      input: task,
    });
 
    // Display the result
    console.log("\nAgent response:");
    console.log(response.output);
  } catch (error) {
    console.error("Error running agent:", error);
  }
}
 
main();