const express = require('express');
const {
    validationResult
} = require('express-validator');
const Permisos = require('../models/permiso');

const permisosPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const {
        nombre,
        descripcion
    } = req.body;
    const permiso = new Permisos({
        nombre,
        descripcion
    })

    const existeNombre = await Permisos.findOne({
        nombre
    });

    if (existeNombre) {
        return res.status(400).json({
            msg: 'El nombre ya está registrado'
        });
    }


    permiso.save();
    res.json({
        msg: 'Permiso creado'
    })


}

const permisosGet = async (req, res) => {
    const permisos = await Permisos.find();

    res.json({
        msg: "lista de permisos",
        permisos
    });
}
const permisoGet = async (req, res) => {

    const {
        id
    } = req.params;
    const permiso = await Permisos.findById(id);
    !permiso ? res.json({
        msg: 'El permiso no existe'
    }) : res.json({
        msg: "Información del permiso",
        permiso
    });
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
const permisosPut = async (req, res) => {

    const {
        id
    } = req.params;
    const permiso = await Permisos.findById(id);
    const {
        _id,
        ...resto
    } = req.body;
    if (!permiso) {
        return res.json({
            msg: 'El permiso no existe'
        });
    }
    const permisoactualizado = await Permisos.findByIdAndUpdate(id, resto);

    res.json({
        msg: "Permiso actualizado",

        permisoactualizado
    });


}

const permisosDelete = async (req, res) => {
    const {
        id
    } = req.params;
    const permiso = await Permisos.findByIdAndUpdate(id, {
        estado: false
    });
    if (!permiso) {
        return res.json({
            msg: 'El permiso no existe'
        });
    }
    res.json({
        msg: "Permiso eliminado"
    });
}
module.exports = {
    permisosPost,
    permisosGet,
    permisoGet,
    permisosPut,
    permisosDelete
}