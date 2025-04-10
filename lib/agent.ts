import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { RecallAgentToolkit } from "@recallnet/agent-toolkit/mcp";
import { Configuration } from "@recallnet/agent-toolkit/shared";
import * as dotenv from "dotenv";
 
// Load environment variables
dotenv.config();
 
// Define permissions for your agent
const configuration: Configuration = {
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
  context: {},
};
 
// Get private key from environment
const privateKey = process.env.RECALL_PRIVATE_KEY || '';
 
if (!privateKey) {
  console.error("Missing RECALL_PRIVATE_KEY environment variable");
  process.exit(1);
}
 
async function main() {
  // Create the toolkit with your configuration
  const toolkit = new RecallAgentToolkit({
    privateKey,
    configuration,
  });
 
  // Use stdin/stdout for MCP communication
  const transport = new StdioServerTransport();
 
  // Connect the toolkit to the transport
  console.error("Starting Recall Agent Toolkit MCP server...");
  await toolkit.connect(transport);
}
 
main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});