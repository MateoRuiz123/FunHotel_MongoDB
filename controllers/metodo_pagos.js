const express = require('express');
const {validationResult} = require('express-validator');
const Metodo_pago = require('../models/metodo_pago');

const metodo_pagosPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { nombre } = req.body;
    const metodo_pago = new Metodo_pago({nombre});

    metodo_pago.save();
    res.json({msg: "Ingreso creado"});

}

const metodo_pagosGet = async (req, res) => {
    const metodo_pagos = await Metodo_pago.find();

    res.json({
        msg: "Lista de ingresos",
        metodo_pagos
    });

}

const metodo_pagoGet = async (req, res) => {

    const {id} = req.params;    
    const metodo_pago = await Metodo_pago.findById(id);
    !metodo_pago ? res.json({msg: "Metodo de pago no encontrado"}) : res.json({msg: "Información del metodo de pago", metodo_pago});    
    /* if(!usuario){
        return res.json({msg: "Usuario no encontrado"});
    }
    res.json({
        msg: "Información del usuario",
        usuario
    }); */

}

const metodo_pagosPut = async (req, res) => {

    const {id} = req.params;    
    const metodo_pago = await Metodo_pago.findById(id);
    const {_id, ... resto} = req.body;

    const metodo_pagoActualizado = await Metodo_pago.findByIdAndUpdate(id, resto);

    res.json({msg: "Metodo de pago actualizado", metodo_pago});      

}

const metodo_pagosDelete = async (req, res) => {

    const {id} = req.params;    
    /* const usuario = await Usuario.findByIdAndDelete(id); */
    const metodo_pago = await Metodo_pago.findByIdAndUpdate(id, {estado: false});

    res.json({msg: "Metodo de pago eliminado"});

}

module.exports = {metodo_pagosPost, metodo_pagosGet, metodo_pagoGet, metodo_pagosPut, metodo_pagosDelete};