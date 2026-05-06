import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

const socket = io("https://portfolio-projet-1.onrender.com");

function ChatBox() {
  const [open, setOpen] = useState(false);
  const [pseudo, setPseudo] = useState("Visiteur");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
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
        sender: "visiteur",
        name: pseudo,
      });

      socket.emit("stop typing");
      setMessage("");
      window.location.href = "/chat";
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
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-cyan-400">Chat</h2>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg"
            >
              ✖
            </button>
          </div>

          <input
            type="text"
            placeholder="Votre nom..."
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded-xl bg-slate-800 text-white outline-none text-sm"
          />

          <div className="bg-slate-950 h-64 overflow-y-auto p-3 rounded-xl mb-3">
            {messages.length === 0 ? (
              <p className="text-slate-500 text-sm text-center mt-24">
                Aucun message
              </p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`px-3 py-2 rounded-xl mb-2 text-sm w-fit ${
                    msg.sender === "admin"
                      ? "bg-slate-700 text-white"
                      : "bg-cyan-500 text-black"
                  }`}
                >
                  <p className="font-semibold text-xs">
                    {msg.sender === "admin" ? "Admin" : msg.name}
                  </p>
                  <p>{msg.text}</p>
                  <p className="text-[10px] opacity-70 mt-1">{msg.time}</p>
                </div>
              ))
            )}

            {typing && (
              <p className="text-slate-400 text-xs mt-2">{typing}</p>
            )}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Message..."
              value={message}
              onChange={handleTyping}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-800 text-white outline-none text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-4 py-2 rounded-xl text-sm transition"
            >
              Envoyer
            </button>
          </div>

          <Link
            to="/chat"
            className="block text-center text-cyan-400 mt-4 text-sm hover:text-cyan-300"
          >
            Ouvrir le chat complet
          </Link>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black text-2xl shadow-2xl flex items-center justify-center transition"
      >
        💬
      </button>
    </div>
  );
}

export default ChatBox;