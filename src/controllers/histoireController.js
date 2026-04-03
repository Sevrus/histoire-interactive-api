const prisma = require('../prismaClient');

const creerHistoire = async (req, res) => {
    try {
        const { titre, slug, resume, description } = req.body;

        const auteurId = req.user.id;

        const histoireExistante = await prisma.histoire.findUnique({
            where: { slug }
        });
        if (histoireExistante) {
            return res.status(400).json({ message: "Une histoire avec ce slug existe déjà." });
        }

        const nouvelleHistoire = await prisma.histoire.create({
            data: {
                titre,
                slug,
                resume,
                description,
                auteurId
            }
        });

        res.status(201).json({
            message: "Histoire créée avec succès !",
            histoire: nouvelleHistoire
        });
    } catch (error) {
        console.error("Erreur lors de la création de l'histoire:", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la création de l'histoire." });
    }
};

const getHistoires = async (req, res) => {
    try {
        const histoires = await prisma.histoire.findMany({
            include: {
                auteur: {
                    select: { login: true }
                }
            }
        });
        res.status(200).json(histoires);
    } catch (error) {
        console.error("Erreur lors de la récupération des histoires:", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la récupération des histoires." });
    }
};

const getHistoireById = async (req, res) => {
    try {
        const { id } = req.params;
        const histoire = await prisma.histoire.findUnique({
            where: { id },
            include: {
                chapitres: true
            }
        });
        if (!histoire) {
            return res.status(404).json({ message: "Histoire non trouvée." });
        }

        res.status(200).json(histoire);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'histoire:", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la récupération de l'histoire." });
    }
};

const modifierHistoire = async (req, res) => {
    try {
        const { id } = req.params;
        const { titre, slug, resume, description, statut, pointDeDepart } = req.body;

        const histoireExistante = await prisma.histoire.findUnique({ where: { id } });
        if (!histoireExistante) {
            return res.status(404).json({ message: "Histoire introuvable." });
        }
        if (req.user.role !== "ADMIN" && histoireExistante["auteurId"] !== req.user.id) {
            return res.status(403).json({ message: "Vous n'avez pas le droit de modifier cette histoire." });
        }

        const histoireModifiee = await prisma.histoire.update({
            where: { id },
            data: { titre, slug, resume, description, statut, pointDeDepart }
        });

        res.status(200).json({ message: "Histoire modifiée avec succès", histoire: histoireModifiee });
    } catch (error) {
        console.error("Erreur modifierHistoire:", error);
        res.status(500).json({ message: "Erreur lors de la modification de l'histoire." });
    }
};

const supprimerHistoire = async (req, res) => {
    try {
        const { id } = req.params;

        const histoireExistante = await prisma.histoire.findUnique({ where: { id } });
        if (!histoireExistante) {
            return res.status(404).json({ message: "Histoire introuvable." });
        }
        if (req.user.role !== "ADMIN" && histoireExistante["auteurId"] !== req.user.id) {
            return res.status(403).json({ message: "Vous n'avez pas le droit de supprimer cette histoire." });
        }

        await prisma.histoire.delete({ where: { id } });

        res.status(200).json({ message: "Histoire et contenus liés supprimés avec succès." });
    } catch (error) {
        console.error("Erreur supprimerHistoire:", error);
        res.status(500).json({ message: "Erreur lors de la suppression de l'histoire." });
    }
};

module.exports = { creerHistoire, getHistoires, getHistoireById, modifierHistoire, supprimerHistoire };
