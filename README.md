# 📖 Application d'Histoires Interactives ("Livre dont vous êtes le héros")

Une application web complète permettant de créer, gérer et jouer à des aventures textuelles interactives. Le moteur de jeu intègre des mécaniques de RPG légères (jets de dés, inventaire, caractéristiques, conditions de choix).

## 🚀 Fonctionnalités

Le projet est divisé en deux parties principales :

### 🎮 Front-office (Joueur) - *En cours de développement*
* **Catalogue d'histoires :** Consultation des aventures disponibles.
* **Moteur narratif :** Lecture de chapitres et prise de décisions via des choix multiples.
* **Moteur de règles :** Gestion de l'inventaire, des points de vie, des caractéristiques et des jets de dés.
* **Sauvegarde :** Enregistrement de la progression de la partie en base de données.

### ⚙️ Back-office (Auteur & Administrateur)
* **Authentification sécurisée :** Connexion via JWT et mots de passe hachés (Bcrypt).
* **Gestion des rôles :** Administrateurs (accès total) et Auteurs (gestion de leurs propres histoires).
* **Éditeur d'histoires :** Création de nœuds narratifs (chapitres) et d'embranchements (choix).
* **Configuration des mécaniques :** Définition des conditions d'accès aux choix et des effets (gain d'objets, perte de PV, etc.).

## 🛠️ Stack Technologique

* **Back-end :** Node.js, Express.js
* **Base de données :** PostgreSQL
* **ORM :** Prisma
* **Sécurité :** Bcrypt (hachage), JSON Web Tokens (JWT)
* **Front-end :** React (À venir)

## 📦 Installation et Lancement (Développement)

### Prérequis
* [Node.js](https://nodejs.org/) installé sur votre machine.
* Une instance [PostgreSQL](https://www.postgresql.org/) en cours d'exécution.

### 1. Cloner le dépôt et installer les dépendances
```bash
git clone <url-de-ton-repo>
cd histoire-interactive-api
npm install
