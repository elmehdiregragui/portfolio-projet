import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("https://portfolio-projet-1.onrender.com");

function Chat() {
  const [pseudo, setPseudo] = useState("Admin");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    });

    socket.on("online users", (count) => {
      setOnlineUsers(count);
    });

    socket.on("chat history", (history) => {
      setMessages(history);
    });

    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("typing", (data) => {
      setTyping(`${data.name} est en train d'écrire...`);
    });

    socket.on("stop typing", () => {
      setTyping("");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("online users");
      socket.off("chat history");
      socket.off("chat message");
      socket.off("typing");
      socket.off("stop typing");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("chat message", {
        text: message,
        sender: "admin",
        name: pseudo,
      });

      socket.emit("stop typing");

      setMessage("");
    }
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);

    socket.emit("typing", {
      name: pseudo,
    });

    setTimeout(() => {
      socket.emit("stop typing");
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-24 bg-slate-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[80vh]">

        <aside className="bg-slate-900 border-r border-slate-800 p-6">
          <h2 className="text-xl font-bold mb-6">
            Dashboard Chat
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-3xl font-bold">
                {messages.length}
              </p>

              <p className="text-slate-400">
                Messages
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-3xl font-bold">
                {onlineUsers}
              </p>

              <p className="text-slate-400">
                Personnes en ligne
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p
                className={
                  connected
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {connected
                  ? "● Connecté"
                  : "● Déconnecté"}
              </p>

              <p className="text-slate-400 mt-2">
                portfolio-projet-six.vercel.app
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-slate-400 mb-2">
                Nom admin
              </p>

              <input
                type="text"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 outline-none"
              />
            </div>

          </div>
        </aside>

        <main className="md:col-span-3 flex flex-col">

          <div className="border-b border-slate-800 px-6 py-4 flex justify-between">
            <h1 className="font-bold">
              Chat temps réel
            </h1>

            <span
              className={
                connected
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {connected
                ? `Connecté • ${onlineUsers} en ligne`
                : "Déconnecté"}
            </span>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-4">

            {messages.length === 0 ? (
              <p className="text-slate-500 text-center mt-20">
                Aucun message pour le moment
              </p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    msg.sender === "admin"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  {msg.sender !== "admin" && (
                    <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
                      {msg.name?.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>

                    <p className="text-slate-400 text-sm mb-1">
                      {msg.name} - {msg.time}
                    </p>

                    <div
                      className={`px-4 py-2 rounded-xl w-fit ${
                        msg.sender === "admin"
                          ? "bg-cyan-500 text-black ml-auto"
                          : "bg-slate-800 text-white"
                      }`}
                    >
                      {msg.text}
                    </div>

                  </div>

                </div>
              ))
            )}

            {typing && (
              <p className="text-slate-400 text-sm italic">
                {typing}
              </p>
            )}

          </div>

          <div className="p-5 border-t border-slate-800 flex gap-3">

            <input
              type="text"
              placeholder="Répondre..."
              value={message}
              onChange={handleTyping}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
            />

            <button
              onClick={sendMessage}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-xl"
            >
              Envoyer
            </button>

          </div>

        </main>
      </div>
    </div>
  );
}

export default Chat;