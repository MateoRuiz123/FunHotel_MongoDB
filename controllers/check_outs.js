const express = require('express');
const {validationResult} = require('express-validator');
const Check_out = require('../models/check_out');

const check_outsPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { fecha_sa,check_in,metodo_pago,ventas,cliente} = req.body;
    const check_out = new Check_out({fecha_sa,check_in,metodo_pago,ventas,cliente});

    check_out.save();
    res.json({msg: "Salida creada"});

}

const check_outsGet = async (req, res) => {
    const check_outs = await Check_out.find();

    res.json({
        msg: "Lista de salidas",
        check_outs
    });

}

const check_outGet = async (req, res) => {

    const {id} = req.params;    
    const check_out = await Check_out.findById(id);
    !check_out ? res.json({msg: "Salida no encontrada"}) : res.json({msg: "Información de la salida", check_out});    
    /* if(!usuario){
        return res.json({msg: "Usuario no encontrado"});
    }
    res.json({
        msg: "Información del usuario",
        usuario
    }); */

}

const check_outsPut = async (req, res) => {

    const {id} = req.params;    
    const check_out = await Check_out.findById(id);
    const {_id, check_in,  ... resto} = req.body;

    const check_outActualizado = await Check_out.findByIdAndUpdate(id, resto);

    res.json({msg: "Salida actualizada", check_out});      

}

const check_outsDelete = async (req, res) => {

    const {id} = req.params;    
    /* const usuario = await Usuario.findByIdAndDelete(id); */
    const check_out = await Check_out.findByIdAndUpdate(id, {estado: false});

    res.json({msg: "Salida  eliminada"});

}

module.exports = {check_outsPost, check_outsGet, check_outGet, check_outsPut, check_outsDelete};