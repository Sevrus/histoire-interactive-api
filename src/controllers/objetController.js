const prisma = require("../prismaClient");

const creerObjet = async (req, res) => {
    try {
        const { histoireId, nom, description, type, effet } = req.body;

        if (histoireId) {
            const histoire = await prisma.histoire.findUnique({
                where: { id: histoireId },
            });

            if (!histoire) {
                return res.status(404).json({ error: "L'histoire spécifiée n'existe pas." });
            }
        }

        const nouvelObjet = await prisma.objet.create({
            data: {
                histoireId,
                nom,
                description,
                type,
                effet
            }
        });

        res.status(201).json({
            message: "Objet créé avec succès",
            objet: nouvelObjet
        });
    } catch (error) {
        console.error("Erreur lors de la création de l'objet :", error);
        res.status(500).json({ error: "Une erreur est survenue lors de la création de l'objet." });
    }
};

const getObjetsParHistoire = async (req, res) => {
    try {
        const { histoireId } = req.params;

        const objets = await prisma.objet.findMany({
            where: { histoireId }
        });

        res.status(200).json(objets);
    } catch (error) {
        console.error("Erreur getObjetsParHistoire:", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la récupération des objets." });
    }
};

const modifierObjet = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom, description, type, effet } = req.body;

        const objetModifie = await prisma.objet.update({
            where: { id },
            data: { nom, description, type, effet }
        });

        res.status(200).json({ message: "Objet modifié avec succès", objet: objetModifie });
    } catch (error) {
        console.error("Erreur modifierObjet:", error);
        res.status(500).json({ message: "Erreur lors de la modification de l'objet." });
    }
};

const supprimerObjet = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.objet.delete({ where: { id } });

        res.status(200).json({ message: "Objet supprimé avec succès." });
    } catch (error) {
        console.error("Erreur supprimerObjet:", error);
        res.status(500).json({ message: "Erreur lors de la suppression de l'objet." });
    }
};

module.exports = { creerObjet, getObjetsParHistoire, modifierObjet,supprimerObjet };
