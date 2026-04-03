const express = require("express");
const router = express.Router();
const chapitreController = require("../controllers/chapitreController");
const { verifierToken } = require("../middlewares/authMiddleware");

router.post("/", verifierToken, chapitreController.creerChapitre);

router.get("/histoire/:histoireId", chapitreController.getChapitresParHistoire);

router.put('/:id', verifierToken, chapitreController.modifierChapitre);

router.delete('/:id', verifierToken, chapitreController.supprimerChapitre);

module.exports = router;
