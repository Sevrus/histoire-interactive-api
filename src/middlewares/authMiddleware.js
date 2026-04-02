const jwt = require("jsonwebtoken");

const verifierToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
       return res.status(401).json({ message: "Accès refusé. Aucun token fourni." });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        next();
    } catch (error) {
        res.status(401).json({ message: "Token invalide ou expiré. Veuillez vous reconnecter." });
    }
};

module.exports = { verifierToken };
