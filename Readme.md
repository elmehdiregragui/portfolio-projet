# Portfolio

## Description du projet

Ce projet est un portfolio professionnel développé dans le cadre du cours de développement web avancé.

Il présente mes compétences, mes projets, mon parcours, mes expériences et permet aussi une communication en temps réel grâce à un système de chat intégré.

Le projet est construit avec une architecture full stack moderne :

- Frontend React
- Backend Node.js / Express
- Socket.IO pour le temps réel
- API REST
- JWT pour la sécurité
- Docker
- Déploiement Vercel + Render


## Liens du projet

### Portfolio en ligne

https://portfolio-projet-six.vercel.app

### Backend / API Render

https://portfolio-projet-1.onrender.com

### GitHub

https://github.com/elmehdiregragui/portfolio-projet


## Technologies utilisées

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Socket.IO Client

### Backend

- Node.js
- Express
- Socket.IO
- JSON Web Token
- bcryptjs
- express-validator
- dotenv

### Déploiement

- Vercel pour le frontend
- Render pour le backend
- GitHub pour le versionnement

### Conteneurisation

- Docker
- Docker Compose


## Fonctionnalités principales

## Partie 1 — Portfolio professionnel

Le portfolio contient :

- Page d’accueil moderne
- Section À propos
- Section Projets
- Section Compétences
- Section Expériences
- Section Contact
- Navigation avec React Router
- Mode sombre / clair
- Design responsive
- Images pour les projets
- Footer avec liens utiles
- Déploiement sur Vercel


## Partie 2 — Chat temps réel

Le projet contient un système de chat en temps réel avec Socket.IO.

Fonctionnalités du chat :

- Bouton de chat flottant
- Fenêtre de discussion
- Page complète `/chat`
- Envoi et réception de messages en temps réel
- Séparation entre visiteur et admin
- Historique des messages pendant la session
- Horodatage des messages
- Nombre de personnes connectées
- Pseudo temporaire
- Indicateur “est en train d’écrire...”
- Déploiement du serveur sur Render


## Partie 3 — API REST professionnelle

Le backend contient une API REST avec plusieurs routes.

### Routes publiques

| Méthode | Route | Description |
| GET | `/api/projects` | Retourne tous les projets |
| GET | `/api/projects/:id` | Retourne un projet précis |
| GET | `/api/skills` | Retourne les compétences |
| GET | `/api/experiences` | Retourne les expériences |
| POST | `/api/contact` | Envoie un message de contact |
| POST | `/api/auth/login` | Connexion admin avec JWT |

### Routes protégées par JWT

| Méthode | Route | Description |
| GET | `/api/messages` | Retourne les messages de contact |
| POST | `/api/projects` | Ajoute un projet |
| PUT | `/api/projects/:id` | Modifie un projet |
| DELETE | `/api/projects/:id` | Supprime un projet |


## Authentification admin

Pour tester l’authentification :

## Body JSON

```json
{
  "email": "admin@portfolio.com",
  "password": "admin123"
}
```

## Réponse attendue

```json
{
  "message": "Connexion réussie",
  "token": "TOKEN_JWT"
}
```

Pour accéder aux routes protégées, il faut ajouter dans les headers :

```http
Authorization: Bearer TOKEN_JWT
```


# Exemple de route protégée

## Route

```http
GET /api/messages
```

## Header

```http
Authorization: Bearer TOKEN_JWT
```

# Installation du projet

## 1. Cloner le projet

```bash
git clone https://github.com/elmehdiregragui/portfolio-projet.git
```

## 2. Accéder au dossier

```bash
cd portfolio-projet
```

# Lancement du frontend

```bash
cd client
npm install
npm run dev
```

Le frontend sera disponible ici :

```text
http://localhost:5173
```

# Lancement du backend

```bash
cd server
npm install
npm run dev
```

Le backend sera disponible ici :

```text
http://localhost:3001
```


# Variables d’environnement

Dans le dossier `server`, créer un fichier `.env` :

```env
JWT_SECRET=secret_portfolio_123
PORT=3001
```

Un fichier `.env.example` est aussi fourni pour montrer les variables nécessaires.


# Lancement avec Docker

Le projet peut être lancé avec Docker Compose.

À la racine du projet :

```bash
docker compose up --build
```

Cette commande lance :

- le client React
- le serveur Express / Socket.IO


# Structure du projet

portfolio-projet/
│
├── client/
│   ├── public/
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ChatBox.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Chat.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── vercel.json
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── Dockerfile
│   ├── package.json
│   ├── .env.example
│
├── docker-compose.yml
├── README.md
└── documentation/



# Tests API

Les routes API ont été testées avec Thunder Client.

## Routes testées

- GET `/api/projects`
- GET `/api/projects/:id`
- GET `/api/skills`
- GET `/api/experiences`
- POST `/api/contact`
- POST `/api/auth/login`
- GET `/api/messages`
- POST `/api/projects`
- PUT `/api/projects/:id`
- DELETE `/api/projects/:id`


# Déploiement

## Frontend

Le frontend est déployé sur Vercel :

```text
https://portfolio-projet-six.vercel.app
```

## Backend

Le backend est déployé sur Render :

```text
https://portfolio-projet-1.onrender.com
```

---

# Sécurité

Le projet utilise :

- JWT pour sécuriser les routes admin
- dotenv pour cacher les variables sensibles
- express-validator pour valider les données envoyées

Le fichier `.env` n’est pas envoyé sur GitHub.


# Auteur

Elmehdi Regragui

Étudiant en Techniques de l’informatique  
Collège LaSalle, Montréal
