const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../prismaClient.js");

// --- 1. Création d'un compte (Register) ---
const register = async (req, res) => {
    try{
        const {login, motDePasse, role} = req.body;

        const adminExistant = await prisma.admin.findUnique({
            where: {login}
        });
        if (adminExistant) {
            return res.status(400).json({message: "Ce login est déjà utilisé."});
        }

        const salt = await bcrypt.genSalt(10);
        const motDePasseHashe = await bcrypt.hash(motDePasse, salt);

        const nouvelAdmin = await prisma.admin.create({
            data: {
                login,
                motDePasse: motDePasseHashe,
                role: role || "AUTEUR"
            }
        });

        res.status(201).json({message: "Compte créé avec succès !", adminId: nouvelAdmin.id});
    } catch (error) {
        console.error("Erreur register :", error);
        res.status(500).json({message: "Erreur lors de la création du compte."});
    }
};

// --- 2. Connexion (Login) ---
const login = async (req, res) => {
    try {
        const { login, motDePasse } = req.body;

        const admin = await prisma.admin.findUnique({ where: { login } });
        if (!admin) {
            return res.status(401).json({ message: "Identifiants incorrects." });
        }

        const isMatch = await bcrypt.compare(motDePasse, admin.motDePasseHashe);
        if (!isMatch) {
            return res.status(401).json({ message: "Identifiants incorrects." });
        }

        await prisma.admin.update({
            where: { id: admin.id },
            data: { dateDerniereConnex: new Date() }
        });

        const token = jwt.sign(
            { id: admin.id, role: admin.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Connexion réussie",
            token,
            role: admin.role
        });
    } catch (error) {
        console.error("Erreur login:", error);
        res.status(500).json({ message: "Erreur lors de la connexion." });
    }
};

module.exports = { register, login };
