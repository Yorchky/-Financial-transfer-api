const auth = (req, res, next) => {

    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({
            message: "Application token is required."
        });
    }

    if (token !== process.env.APPLICATION_TOKEN) {
        return res.status(401).json({
            message: "Invalid application token."
        });
    }

    next();
};

module.exports = auth;