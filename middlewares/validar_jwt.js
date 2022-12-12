const jwt = require('jsonwebtoken');
const express = require('express');
const Usuario = require('../models/usuario');

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
        } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        req.uid = uid;
        const usuario = await Usuario.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                ok: false,
                msg: 'Token no válido, usuario no existe en DB'
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
        //console.log(error);
        res.status(401).json({
            ok: false,
            msg: 'Token no válido, no se pudo verificar'
        });
    }
}

module.exports = {
    validarJWT
}