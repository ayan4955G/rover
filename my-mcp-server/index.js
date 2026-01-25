import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// 1. Create the server instance
const server = new Server(
  { name: "my-node-server", version: "1.0.0" },
  { capabilities: { resources: {}, tools: {} } }
);

// 2. Define available tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "get_system_time",
      description: "Gets the current server time",
      inputSchema: { type: "object", properties: {} },
    },
  ],
}));

// 3. Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "get_system_time") {
    return {
      content: [{ type: "text", text: new Date().toISOString() }],
    };
  }
  throw new Error("Tool not found");
});

// 4. Connect using Standard Input/Output
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("MCP Server running on stdio");