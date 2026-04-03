const express = require("express");
const router = express.Router();
const objetController = require("../controllers/objetController");
const { verifierToken } = require("../middlewares/authMiddleware");

router.post("/", verifierToken, objetController.creerObjet);

router.get("/histoire/:histoireId", objetController.getObjetsParHistoire);

router.put('/:id', verifierToken, objetController.modifierObjet);

router.delete('/:id', verifierToken, objetController.supprimerObjet);

module.exports = router;
