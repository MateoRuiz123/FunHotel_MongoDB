const express = require('express');
const bcryptjs = require('bcryptjs');
const {
    validationResult
} = require('express-validator');
const Usuario = require('../models/usuario');
const {
    generarJWT
} = require('../helpers/jwt');

const login = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            ok: false,
            error: error.mapped()
        })
    }

    const {
        correo,
        password
    } = req.body;

    try {
        const usuario = await Usuario.findOne({
            correo
        });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            })
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no es valida'
            })
        }

        if (!usuario.estado) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no esta activo'
            })
        }

        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            mensaje: "Login correcto",
            usuario,
            token

        });
    } catch (error) {
        //console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}

module.exports = {
    login
}