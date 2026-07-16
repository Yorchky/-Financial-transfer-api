const jwt = require("jsonwebtoken");

const generarToken = (email, password) => {

    const payload = {
        email,
        password
    };

    return jwt.sign(
        payload,
        process.env.JWT_TOKEN_SECRET,
        {
            expiresIn:"1h"
        }
    );
};

module.exports={
    generarToken
};