const express = require("express");
const router = express.Router();
const sauvegardeController = require("../controllers/sauvegardeController");
const { verifierToken } = require("../middlewares/authMiddleware");

router.post("/", verifierToken, sauvegardeController.sauvegarderPartie);

router.get("/:histoireId", verifierToken, sauvegardeController.chargerPartie);

module.exports = router;
