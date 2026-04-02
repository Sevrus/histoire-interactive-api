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

module.exports = { creerHistoire, getHistoires, getHistoireById };
