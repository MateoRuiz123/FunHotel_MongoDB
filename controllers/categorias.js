const express = require('express')
const {
    validationResult
} = require('express-validator')
const Categoria = require('../models/categoria')

const categoriasPost = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    const {
        nombre,
        descripcion
    } = req.body
    const categoria = new Categoria({
        nombre,
        descripcion
    })

    const existeNombre = await Categoria.findOne({
        nombre
    })

    if (existeNombre) {
        return res.json({
            msg: 'El nombre ya existe'
        })
    }

    categoria.save()
    res.json({
        msg: 'Categoria creada'
    })
}

const categoriasGet = async (req, res) => {
    const categorias = await Categoria.find()

    res.json({
        msg: 'Lista de categorias',
        categorias
    })
}

const categoriaGet = async (req, res) => {
    const {
        id
    } = req.params
    const categoria = await Categoria.findById(id);
    !categoria ? res.json({
        msg: 'Categoria no encontrado'
    }) : res.json({
        msg: 'Información del categoria',
        categoria
    })
}

const categoriasPut = async (req, res) => {
    const {
        id
    } = req.params
    const categoria = await Categoria.findById(id)
    const {
        _id,
        ...resto
    } = req.body
    const categoriaActualizada = await Categoria.findByIdAndUpdate(id, resto)

    res.json({
        msg: 'Categoria actulizado',
        categoria
    })
}

const categoriasDelete = async (req, res) => {
    const {
        id
    } = req.params
    const categoria = await Categoria.findByIdAndUpdate(id, {
        estado: false
    })

    res.json({
        msg: 'Categoria eliminado'
    })
}

module.exports = {
    categoriasPost,
    categoriasGet,
    categoriaGet,
    categoriasPut,
    categoriasDelete
};