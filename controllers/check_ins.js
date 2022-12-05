const express = require('express');
const {validationResult} = require('express-validator');
const Check_in = require('../models/check_in');

const check_insPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { reserva, fecha_in, cliente} = req.body;
    const check_in = new Check_in({reserva, fecha_in, cliente});

    check_in.save();
    res.json({msg: "Ingreso creado"});

}

const check_insGet = async (req, res) => {
    const check_ins = await Check_in.find();

    res.json({
        msg: "Lista de ingresos",
        check_ins
    });

}

const check_inGet = async (req, res) => {

    const {id} = req.params;    
    const check_in = await Check_in.findById(id);
    !check_in ? res.json({msg: "ingreso no encontrado"}) : res.json({msg: "Información del ingreso", check_in});    
    /* if(!usuario){
        return res.json({msg: "Usuario no encontrado"});
    }
    res.json({
        msg: "Información del usuario",
        usuario
    }); */

}

const check_insPut = async (req, res) => {

    const {id} = req.params;    
    const check_in = await Check_in.findById(id);
    const {_id, reserva, cliente, ... resto} = req.body;

    const check_inActualizado = await Check_in.findByIdAndUpdate(id, resto);

    res.json({msg: "Ingreso actualizado", check_in});      

}

const check_insDelete = async (req, res) => {

    const {id} = req.params;    
    /* const usuario = await Usuario.findByIdAndDelete(id); */
    const check_in = await Check_in.findByIdAndUpdate(id, {estado: false});

    res.json({msg: "Ingreso eliminado"});

}

module.exports = {check_insPost, check_insGet, check_inGet, check_insPut, check_insDelete};