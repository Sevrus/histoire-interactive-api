const prisma = require("../prismaClient");

const creerChapitre = async (req, res) => {
    try {
        const { histoireId, titreInterne, contenu, effetsEntree } = req.body;

        const histoire = await prisma.histoire.findUnique({
            where: { id: histoireId }
        });

        if (!histoire) {
            return res.status(404).json({ message: "L'histoire spécifiée n'existe pas." });
        }

        const nouveauChapitre = await prisma.chapitre.create({
            data: {
                histoireId,
                titreInterne,
                contenu,
                effetsEntree
            }
        });

        res.status(201).json({
            message: "Chapitre créé avec succès",
            chapitre: nouveauChapitre
        });
    } catch (error) {
        console.error("Erreur lors de la création du chapitre:", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la création du chapitre." });
    }
};

const getChapitresParHistoire = async (req, res) => {
    try {
        const { histoireId } = req.params;

        const chapitres = await prisma.chapitre.findMany({
            where: { histoireId },
            include: {
                choixSortants: true
            }
        });

        res.status(200).json(chapitres);
    } catch (error) {
        console.error("Erreur getChapitresParHistoire:", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la récupération des chapitres." });
    }
};

const modifierChapitre = async (req, res) => {
    try {
        const { id } = req.params;
        const { titreInterne, contenu, effetsEntree, ordre } = req.body;

        const chapitreModifie = await prisma.chapitre.update({
            where: { id },
            data: { titreInterne, contenu, effetsEntree, ordre }
        });

        res.status(200).json({ message: "Chapitre modifié avec succès", chapitre: chapitreModifie });
    } catch (error) {
        console.error("Erreur modifierChapitre:", error);
        res.status(500).json({ message: "Erreur lors de la modification du chapitre." });
    }
};

const supprimerChapitre = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.chapitre.delete({ where: { id } });

        res.status(200).json({ message: "Chapitre supprimé avec succès." });
    } catch (error) {
        console.error("Erreur supprimerChapitre:", error);
        res.status(500).json({ message: "Erreur lors de la suppression du chapitre." });
    }
};

module.exports = { creerChapitre, getChapitresParHistoire, modifierChapitre, supprimerChapitre };
