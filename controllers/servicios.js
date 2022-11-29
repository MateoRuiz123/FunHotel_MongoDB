const express = require('express')
const {
    validationResult
} = require('express-validator')
const Servicio = require('../models/servicio')

const serviciosPost = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(erros)
    }

    const {
        nombre,
        descripcion
    } = req.body
    const servicio = new Servicio({
        nombre,
        descripcion
    })

    const existeNombre = await Servicio.findOne({
        nombre
    })

    if (existeNombre) {
        return res.json({
            msg: 'El nombre ya existe'
        })
    }

    servicio.save()
    res.json({
        msg: 'Servicio creado'
    })
}

const serviciosGet = async (req, res) => {
    const servicios = await Servicio.find()

    res.json({
        msg: 'Lista de servicios',
        servicios
    })
}

const servicioGet = async (req, res) => {
    const {
        id
    } = req.params
    const servicio = await Servicio.findById(id);
    !servicio ? res.json({
        msg: 'Servicio no encontrado'
    }) : res.json({
        msg: 'Información del servicio',
        servicio
    })
}

const serviciosPut = async (req, res) => {
    const {
        id
    } = req.params
    const servicio = await Servicio.findById(id)
    const {
        _id,
        ...resto
    } = req.body
    const servicioActualizado = await Servicio.findByIdAndUpdate(id, resto)

    res.json({
        msg: 'Servicio actulizado',
        servicio
    })
}

const serviciosDelete = async (req, res) => {
    const {
        id
    } = req.params
    const servicio = await Servicio.findByIdAndUpdate(id, {
        estado: false
    })

    res.json({
        msg: 'Servicio eliminado'
    })
}

module.exports = {
    serviciosPost,
    serviciosGet,
    servicioGet,
    serviciosPut,
    serviciosDelete
};