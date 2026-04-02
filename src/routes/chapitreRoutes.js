const express = require("express");
const router = express.Router();
const chapitreController = require("../controllers/chapitreController");
const { verifierToken } = require("../middlewares/authMiddleware");

router.post("/", verifierToken, chapitreController.creerChapitre);

router.get("/histoire/:histoireId", chapitreController.getChapitresParHistoire);

module.exports = router;
