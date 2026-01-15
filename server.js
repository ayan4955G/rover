import os from "os";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import WebSocket, { WebSocketServer } from "ws";
import path from "path";
import { fileURLToPath } from "url";

// ================= APP =================
const app = express();

// ✅ FIX __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Static
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/three", express.static(path.join(__dirname, "node_modules/three/build")));

// Views
app.set("views", path.join(__dirname, "template"));
app.set("view engine", "ejs");

// ================= HTTP + SOCKET.IO (WEB) =================
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "*" },
});

// UI route
app.get("/", (req, res) => {
  res.render("index");
});

// Web dashboard
io.on("connection", (socket) => {
  console.log("Web client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Web client disconnected:", socket.id);
  });
});

// ================= RAW WEBSOCKET (ESP32) =================
// ⚠️ SEPARATE SERVER → NO CONFLICT
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("ESP32 connected (WS)");

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message.toString());

      // Forward to dashboards
      io.emit("gyroscope_data", data);
    } catch {
      console.error("Invalid JSON from ESP32");
    }
  });

  ws.on("close", () => {
    console.log("ESP32 disconnected");
  });
});

// ================= NETWORK INFO =================
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
}

console.log("Server IP Address:", getLocalIP());

// ================= START =================
const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Web server running on http://localhost:${PORT}`);
  console.log(`ESP32 WS listening on ws://${getLocalIP()}:8080`);
});
