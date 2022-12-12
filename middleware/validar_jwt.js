const jwt = require('jsonwebtoken');
const express = require('express');
const Usuario = require('../models/Usuario');

const validarJWT = async (req, res, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const {
            uid
        } = jwt.verify(token, process.env.SECREORPRIVATEKEY)

        req.uid = uid;
        const usuario = await Usuario.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                ok: false,
                msg: 'Token no válido'
            });
        }

        if (!usuario.estado) {
            return res.status(401).json({
                ok: false,
                msg: 'Token no valida, usuario no activo'
            })
        }

        req.usuario = usuario;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
}

module.exports = {
    validarJWT
}