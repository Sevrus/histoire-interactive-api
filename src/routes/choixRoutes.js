// src/routes/choixRoutes.js
const express = require("express");
const router = express.Router();
const choixController = require("../controllers/choixController");
const { verifierToken } = require("../middlewares/authMiddleware");

router.post("/", verifierToken, choixController.creerChoix);

module.exports = router;
