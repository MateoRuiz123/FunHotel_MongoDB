const express = require('express');
const {
    validationResult
} = require('express-validator');
const Sala = require('../models/sala');

const salasPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const {
        ficha,
        nombre,
        temporada,
        dificultad,
        usuario
    } = req.body;
    const sala = new Sala({
        ficha,
        nombre,
        temporada,
        dificultad,
        usuario
    });

    const existeNombre = await Sala.findOne({
        nombre
    });

    if (existeNombre) {
        return res.status(400).json({
            msg: 'El nombre ya está registrado'
        });
    }


    sala.save();
    res.json({
        msg: 'Sala creada'
    })


}

const salasGet = async (req, res) => {
    const salas = await Sala.find();

    res.json({
        msg: "lista de salas",
        salas
    });
}
const salaGet = async (req, res) => {

    const {
        id
    } = req.params;
    const sala = await Sala.findById(id);
    !sala ? res.json({
        msg: 'La sala no existe'
    }) : res.json({
        msg: "Información de la sala",
        sala
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
const salasPut = async (req, res) => {

    const {
        id
    } = req.params;
    const sala = await Sala.findById(id);
    const {
        _id,
        ...resto
    } = req.body;
    if (!sala) {
        return res.json({
            msg: 'La sala no existe'
        });
    }
    const salaactualizada = await Sala.findByIdAndUpdate(id, resto);

    res.json({
        msg: "Sala actualizada",

        salaactualizada
    });


}

const salasDelete = async (req, res) => {
    const {
        id
    } = req.params;
    const sala = await Sala.findByIdAndUpdate(id, {
        estado: false
    });
    if (!sala) {
        return res.json({
            msg: 'La sala no existe'
        });
    }
    res.json({
        msg: "Sala eliminada"
    });
}
module.exports = {
    salasPost,
    salasGet,
    salaGet,
    salasPut,
    salasDelete
}