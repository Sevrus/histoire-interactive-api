const express = require("express");
const cors = require("cors");

const adminRoutes = require("./routes/adminRoutes");
const histoireRoutes = require("./routes/histoireRoutes");
const chapitreRoutes = require("./routes/chapitreRoutes");
const choixRoutes = require("./routes/choixRoutes");
const objetRoutes = require("./routes/objetRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/histoires", histoireRoutes);
app.use("/api/chapitres", chapitreRoutes);
app.use("/api/choix", choixRoutes);
app.use("/api/objets", objetRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Bienvenue sur l'API de ton Histoire Interactive ! 🎲" });
});

module.exports = app;
