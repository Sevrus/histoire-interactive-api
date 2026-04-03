const express = require("express");
const router = express.Router();
const histoireController = require("../controllers/histoireController");
const { verifierToken } = require("../middlewares/authMiddleware");

router.post("/", verifierToken, histoireController.creerHistoire);

router.get("/", histoireController.getHistoires);
router.get("/:id", histoireController.getHistoireById);

router.put('/:id', verifierToken, histoireController.modifierHistoire);

router.delete('/:id', verifierToken, histoireController.supprimerHistoire);

module.exports = router;
