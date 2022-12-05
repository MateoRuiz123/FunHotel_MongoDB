const express = require('express');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/usuario');

const usuarioPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }




    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    const existeEmail = await Usuario.findOne({ correo });

    if (existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        });
    }

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    usuario.save();
    res.json({ msg: 'usuario creado' })


}

const usuariosGet = async (req, res) => {
    const usuarios = await Usuario.find();

    res.json({
        msg: "lista de usuarios",
        usuarios
    });
}
const usuarioGet = async (req, res) => {

    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    !usuario ? res.json({ msg: 'El usuario no existe' }) : res.json({ msg: "Información del usuario", usuario });
    /* if (!usuario) {
        return res.json({
            msg: 'El usuario no existe'
        });
    }

    res.json({
        msg: "Información del usuario",
        usuario
    }); */


}
const usuariosPut = async (req, res) => {

    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    const { _id, google,correo, ...resto } = req.body;
    if (!usuario) {
            return res.json({
                msg: 'El usuario no existe'
            });
        }
    if (resto.password) {
        const salt = bcryptjs.genSaltSync();
        usuario.resto.password = bcryptjs.hashSync(resto.password, salt);
    }
    const usuarioactualizado = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: "Usuario actualizado",

        usuarioactualizado
    });


}

const usuariosDelete = async (req, res) => {
    const { id } = req.params;/* 
    const usuarioeli = await Usuario.findByIdAndDelete(id); */
    const usuarioeli = await Usuario.findByIdAndUpdate(id, { estado: false });
    if (!usuarioeli) {
        return res.json({
            msg: 'El usuario no existe'
        });
    }
    res.json({
        msg: "Estado del usuario actualizado"
    });
}
    




module.exports = {
    usuarioPost,
    usuariosGet,
    usuarioGet,
    usuariosPut,
    usuariosDelete
}


