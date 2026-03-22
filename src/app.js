const express = require("express");
const cors = require("cors");

const adminRoutes = require("./routes/adminRoutes");

const app = express();

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- Déclaration des routes de l'API ---
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l'API de ton Histoire Interactive ! 🎲" });
});

module.exports = app;
