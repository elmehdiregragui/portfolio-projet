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

  // ajouter utilisateur connecté
  onlineUsers++;

  // envoyer nombre utilisateurs
  io.emit("online users", onlineUsers);

  // envoyer historique
  socket.emit("chat history", messages);

  // recevoir message
  socket.on("chat message", (data) => {

    const newMessage = {
      text: data.text,
      sender: data.sender,
      time: new Date().toLocaleTimeString("fr-CA", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    messages.push(newMessage);

    io.emit("chat message", newMessage);
  });

  // déconnexion
  socket.on("disconnect", () => {

    console.log("Utilisateur déconnecté :", socket.id);

    onlineUsers--;

    io.emit("online users", onlineUsers);
  });
});

server.listen(3001, () => {
  console.log("Serveur lancé sur le port 3001");
});