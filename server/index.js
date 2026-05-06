const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let messages = [];
let onlineUsers = 0;

io.on("connection", (socket) => {
  console.log("Utilisateur connecté :", socket.id);

  onlineUsers++;
  io.emit("online users", onlineUsers);

  socket.emit("chat history", messages);

  socket.on("chat message", (data) => {
    const newMessage = {
      text: data.text,
      sender: data.sender,
      name: data.name || "Visiteur",
      time: new Date().toLocaleTimeString("fr-CA", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    messages.push(newMessage);
    io.emit("chat message", newMessage);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("stop typing", () => {
    socket.broadcast.emit("stop typing");
  });

  socket.on("disconnect", () => {
    console.log("Utilisateur déconnecté :", socket.id);

    onlineUsers--;
    io.emit("online users", onlineUsers);
  });
});

server.listen(process.env.PORT || 3001, () => {
  console.log("Serveur lancé");
});