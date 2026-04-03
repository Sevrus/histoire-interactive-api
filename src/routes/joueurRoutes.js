const express = require("express");
const router = express.Router();
const joueurController = require("../controllers/joueurController");

router.post("/register", joueurController["registerJoueur"]);
router.post("/login", joueurController["loginJoueur"]);

module.exports = router;
