require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const JWT_SECRET = process.env.JWT_SECRET;

// données temporaires en mémoire
let projects = [
  {
    id: 1,
    title: "Animal Care",
    image: "/images/animalcare.png",
    description:
      "Application de gestion de clinique vétérinaire permettant de gérer les rendez-vous, les vétérinaires, les propriétaires et les animaux.",
    github: "https://github.com/elmehdiregragui/AnimalCare",
  },

  {
    id: 2,
    title: "Hotel Reservation System",
    image: "/images/hotel.png",
    description:
      "Application web de réservation d’hôtel permettant de gérer les chambres, les réservations et les utilisateurs.",
    github:
      "https://github.com/elmehdiregragui/hotel-reservation-system",
  },

  {
    id: 3,
    title: "Country Explorer",
    image: "/images/country.png",
    description:
      "Application permettant d’explorer les pays et d’afficher leurs informations de manière simple et visuelle.",
    github: "https://github.com/elmehdiregragui/country-explorer",
  },

  {
    id: 4,
    title: "Smart Parking App",
    image: "/images/parking.png",
    description:
      "Application mobile pour gérer des places de stationnement et visualiser les emplacements disponibles.",
    github: "https://github.com/elmehdiregragui/SmartParking",
  },

  {
    id: 5,
    title: "Memory Color",
    image: "/images/memory.png",
    description:
      "Jeu interactif développé en .NET MAUI et basé sur la mémoire visuelle et la reproduction de séquences de couleurs.",
    github: "https://github.com/elmehdiregragui/memory-color",
  },

  {
    id: 6,
    title: "Devinette PHP",
    image: "/images/devinette.png",
    description:
      "Application web PHP permettant de jouer à un jeu de devinette avec base de données.",
    github: "https://github.com/elmehdiregragui/Devinette",
  },
];

let skills = [
  { id: 1, name: "React", level: "85%" },
  { id: 2, name: "JavaScript", level: "85%" },
  { id: 3, name: "Node.js", level: "75%" },
  { id: 4, name: "SQL", level: "90%" },
];

let experiences = [
  {
    id: 1,
    type: "Formation",
    title: "Techniques de l’informatique",
    place: "Collège LaSalle, Montréal",
    date: "2024 - 2026",
    description:
      "Formation en développement web, bases de données, programmation orientée objet, développement mobile et technologies full stack.",
  },
];

let contactMessages = [];

const adminUser = {
  email: "admin@portfolio.com",
  passwordHash: bcrypt.hashSync("admin123", 10),
};

// middleware JWT
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token manquant" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token invalide" });
  }
}

// route test
app.get("/", (req, res) => {
  res.json({ message: "API Portfolio fonctionne" });
});

// AUTH
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (email !== adminUser.email) {
    return res.status(401).json({ message: "Email incorrect" });
  }

  const validPassword = await bcrypt.compare(password, adminUser.passwordHash);

  if (!validPassword) {
    return res.status(401).json({ message: "Mot de passe incorrect" });
  }

  const token = jwt.sign(
    { email: adminUser.email, role: "admin" },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({
    message: "Connexion réussie",
    token: token,
  });
});

// PROJECTS
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/api/projects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return res.status(404).json({ message: "Projet non trouvé" });
  }

  res.json(project);
});

app.post(
  "/api/projects",
  verifyToken,
  [
    body("title").notEmpty().withMessage("Le titre est obligatoire"),
    body("description").notEmpty().withMessage("La description est obligatoire"),
    body("github").notEmpty().withMessage("Le lien GitHub est obligatoire"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newProject = {
      id: projects.length + 1,
      title: req.body.title,
      image: req.body.image || "",
      description: req.body.description,
      github: req.body.github,
    };

    projects.push(newProject);

    res.status(201).json(newProject);
  }
);

app.put("/api/projects/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return res.status(404).json({ message: "Projet non trouvé" });
  }

  project.title = req.body.title || project.title;
  project.image = req.body.image || project.image;
  project.description = req.body.description || project.description;
  project.github = req.body.github || project.github;

  res.json(project);
});

app.delete("/api/projects/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);

  projects = projects.filter((p) => p.id !== id);

  res.json({ message: "Projet supprimé" });
});

// SKILLS
app.get("/api/skills", (req, res) => {
  res.json(skills);
});

// EXPERIENCES
app.get("/api/experiences", (req, res) => {
  res.json(experiences);
});

// CONTACT
app.post(
  "/api/contact",
  [
    body("name").notEmpty().withMessage("Le nom est obligatoire"),
    body("email").isEmail().withMessage("Email invalide"),
    body("message").notEmpty().withMessage("Le message est obligatoire"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newMessage = {
      id: contactMessages.length + 1,
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      date: new Date().toLocaleString("fr-CA"),
    };

    contactMessages.push(newMessage);

    res.status(201).json({
      message: "Message reçu",
      data: newMessage,
    });
  }
);

app.get("/api/messages", verifyToken, (req, res) => {
  res.json(contactMessages);
});

// CHAT SOCKET.IO
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