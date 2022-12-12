const jwt = require('jsonwebtoken');

const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = {
            uid
        };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '5h'
        }, (err, token) => {
            if (err) {
                console.log(err)
                reject('Fallo al generar token')
            } else {
                resolve(token)
            }
        });
    });
}

module.exports = {
    generarJWT
}