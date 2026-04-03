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

const modifierChoix = async (req, res) => {
    try {
        const { id } = req.params;
        const { libelle, destinationChapitreId, conditions, effets, testAssocie } = req.body;

        const choixModifie = await prisma.choix.update({
            where: { id },
            data: {
                libelle,
                destinationChapitreId,
                conditions,
                effets,
                testAssocie
            }
        });

        res.status(200).json({ message: "Choix modifié avec succès", choix: choixModifie });
    } catch (error) {
        console.error("Erreur modifierChoix:", error);
        res.status(500).json({ message: "Erreur lors de la modification du choix." });
    }
};

const supprimerChoix = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.choix.delete({ where: { id } });

        res.status(200).json({ message: "Choix supprimé avec succès." });
    } catch (error) {
        console.error("Erreur supprimerChoix:", error);
        res.status(500).json({ message: "Erreur lors de la suppression du choix." });
    }
};

module.exports = { creerChoix, modifierChoix,supprimerChoix };
