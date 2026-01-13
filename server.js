import os from "os";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import WebSocket, { WebSocketServer } from "ws";
import path from "path";

const app = express();

// Fix __dirname in ES module
const __filename = path.resolve("ROVER");
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Static folder
app.use("/static", express.static(path.join(__dirname, "public")));

// Template (views) folder
app.set("views", path.join(__dirname, "template"));
app.use("/three", express.static(path.join(__dirname, "node_modules/three/build")));
app.use("/socket", express.static(path.join(__dirname, "node_modules/socket.io/client-dist")));

console.log(path.join(__dirname, "node_modules/three/build"), path.join(__dirname, "node_modules/socket.io/client-dist"));
// Set template engine (example: EJS)
app.set("view engine", "ejs");

const server = http.createServer(app);

// Socket.IO for frontend
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Raw WebSocket for ESP32
const wss = new WebSocketServer({ server });

// UI route
app.get("/", (req, res) => {
  res.render("index");
});

// ================= SOCKET.IO (Web Dashboard) =================
io.on("connection", (socket) => {
  console.log("Web client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Web client disconnected:", socket.id);
  });
});

// ================= RAW WEBSOCKET (ESP32) =================
wss.on("connection", (ws) => {
  console.log("ESP32 connected");

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message.toString());

      console.log("Gyroscope Data:", data);

      // Forward ESP32 data to all dashboards
      io.emit("gyroscope_data", data);
    } catch (err) {
      console.error("Invalid JSON from ESP32");
    }
  });

  ws.on("close", () => {
    console.log("ESP32 disconnected");
  });
});

let getLocalip = () => {    
    const interfaces = os.networkInterfaces()
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address
            }
        }
    }
}
console.log("Server IP Address:", getLocalip());

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
