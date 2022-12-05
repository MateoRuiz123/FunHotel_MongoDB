const express = require('express')
const {
    validationResult
} = require('express-validator')
const Pedido = require('../models/pedido')

const pedidosPost = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    const body = req.body
    const pedido = new Pedido(body)

    /* const existeNombre = await Servicio.findOne({
        nombre
    })

    if (existeNombre) {
        return res.json({
            msg: 'El nombre ya existe'
        })
    } */

    pedido.save()
    res.json({
        msg: 'pedido creado'
    })
}

const pedidosGet = async (req, res) => {
    const pedidos = await Pedido.find()

    res.json({
        msg: 'Lista de pedidos',
        pedidos
    })
}

const pedidoGet = async (req, res) => {
    const {
        id
    } = req.params
    const pedido = await Pedido.findById(id);
    !pedido ? res.json({
        msg: 'pedido no encontrado'
    }) : res.json({
        msg: 'Información del pedido',
        pedido
    })
}

const pedidosPut = async (req, res) => {
    const { id } = req.params
    const pedido = await Pedido.findById(id)
    const {
        _id,
        ...resto
    } = req.body
    const pedidoActualizado = await Pedido.findByIdAndUpdate(id, resto)

    res.json({
        msg: 'Pedido actulizado',
        pedido
    })
}

const pedidosDelete = async (req, res) => {
    const {
        id
    } = req.params
    const pedido = await Pedido.findByIdAndUpdate(id, {
        estado: false
    })

    res.json({
        msg: 'Pedido eliminado'
    })
}

module.exports = {
    pedidosPost,
    pedidosGet,
    pedidoGet,
    pedidosPut,
    pedidosDelete
};