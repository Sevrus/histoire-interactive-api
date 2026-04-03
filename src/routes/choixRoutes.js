const express = require("express");
const router = express.Router();
const choixController = require("../controllers/choixController");
const { verifierToken } = require("../middlewares/authMiddleware");

router.post("/", verifierToken, choixController.creerChoix);

router.put('/:id', verifierToken, choixController.modifierChoix);

router.delete('/:id', verifierToken, choixController.supprimerChoix);

module.exports = router;
