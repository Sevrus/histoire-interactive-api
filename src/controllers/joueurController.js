const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../prismaClient");

const registerJoueur = async (req, res) => {
    try {
        const { pseudo, email, motDePasse } = req.body;

        const joueurExistant = await prisma.utilisateur.findFirst({
            where: { OR: [{ pseudo }, { email }] }
        });
        if (joueurExistant) {
            return res.status(400).json({ message: "Un joueur avec ce pseudo ou cet email existe déjà." });
        }

        const salt = await bcrypt.genSalt(10);
        const motDePasseHashe = await bcrypt.hash(motDePasse, salt);

        const nouveauJoueur = await prisma.utilisateur.create({
            data: { pseudo, email, motDePasseHashe }
        });

        res.status(201).json({ message: "Compte joueur créé avec succès", joueurId: nouveauJoueur["id"] });
    } catch (error) {
        console.error("Erreur registerJoueur :", error);
        res.status(500).json({ message: "Erreur lors de l'inscription" });
    }
};

const loginJoueur = async (req, res) => {
    try {
        const { email, motDePasse } = req.body;

        const joueur = await prisma.utilisateur.findUnique({ where: { email } });
        if (!joueur) return res.status(401).json({ message: "Identifiants incorrects" });

        const isMatch = await bcrypt.compare(motDePasse, joueur["motDePasseHashe"]);
        if (!isMatch) return res.status(401).json({ message: "Identifiants incorrects" });

        await prisma.utilisateur.update({
            where: { id: joueur["id"] },
            data: { dateDerniereConnex: new Date() }
        });

        const token = jwt.sign(
            { id: joueur["id"], role: "JOUEUR" },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: "7d" }
        )

        res.status(200).json({ message: "Connexion réussie", token, pseudo: joueur["pseudo"] });
    } catch (error) {
        console.error("Erreur login Joueur :", error);
        res.status(500).json({ message: "Erreur lors de la connexion" });
    }
}

module.exports = { registerJoueur, loginJoueur };
