const prisma = require("../prismaClient")

const creerChoix = async (req, res) => {
    try {
        const {
            chapitreSourceId,
            libelle,
            destinationChapitreId,
            conditions,
            effets,
            testAssocie
        } = req.body;

        const chapitreSource = await prisma.chapitre.findUnique({
            where: {
                id: chapitreSourceId
            }
        });
        if (!chapitreSource) {
            return res.status(404).json({ error: "Le chapitre source n'existe pas." });
        }

        const nouveauChoix = await prisma.choix.create({
            data: {
                chapitreSourceId,
                libelle,
                destinationChapitreId,
                conditions,
                effets,
                testAssocie
            }
        });

        res.status(201).json({
            message: "Choix créé avec succès !",
            choix: nouveauChoix
        });
    } catch (error) {
        console.error("Erreur lors de la création du choix :", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la création du choix." });
    }
};

module.exports = { creerChoix };
