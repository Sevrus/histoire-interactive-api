const prisma = require("../prismaClient");

const sauvegarderPartie = async (req, res) => {
    try {
        const { histoireId, chapitreCourantId, pointsDeVie, caracteristiques, inventaire, variablesEtat } = req.body;
        const utilisateurId = req.user.id; // Vient du token JWT

        const sauvegarde = await prisma.sauvegarde.upsert({
            where: {
                utilisateurId_histoireId: { utilisateurId, histoireId }
            },
            update: {
                chapitreCourantId, pointsDeVie, caracteristiques, inventaire, variablesEtat
            },
            create: {
                utilisateurId, histoireId, chapitreCourantId, pointsDeVie, caracteristiques, inventaire, variablesEtat
            }
        });

        res.status(200).json({ message: "Partie sauvegardée !", sauvegarde });
    } catch (error) {
        console.error("Erreur sauvegarderPartie:", error);
        res.status(500).json({ message: "Erreur lors de la sauvegarde." });
    }
};

const chargerPartie = async (req, res) => {
    try {
        const { histoireId } = req.params;
        const utilisateurId = req.user.id;

        const sauvegarde = await prisma.sauvegarde.findUnique({
            where: {
                utilisateurId_histoireId: { utilisateurId, histoireId }
            }
        });

        if (!sauvegarde) {
            return res.status(404).json({ message: "Aucune sauvegarde trouvée pour cette histoire." });
        }

        res.status(200).json(sauvegarde);
    } catch (error) {
        console.error("Erreur chargerPartie:", error);
        res.status(500).json({ message: "Erreur lors du chargement de la partie." });
    }
};

module.exports = { sauvegarderPartie, chargerPartie };
