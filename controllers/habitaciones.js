const express = require('express');
const { validationResult } = require('express-validator');
const Habitacion = require('../models/habitacion');



const habitacionesPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).jason(errors);
    }

    const body = req.body;
    const habitacion = new Habitacion(body);
    habitacion.save();
    res.json({
        msg: " Habitacion registrada correctamente",
        habitacion
    });
};



const habitacionesGet = async (req, res) => {
    const habitaciones = await Habitacion.find();
    res.json({ msg: "lista de habitaciones", habitaciones });
}



const habitacionGet = async (req, res) => {
    const { id } = req.params;
    const habitacion = await Habitacion.findById(id);
    !habitacion ?
        res.json({ msg: "Habitacion no encontrada" }) : res.json({ msg: "Informacion de habitacion", habitacion });

}


const habitacionesPut = async (req, res) => {
    const { id } = req.params;
    const habitaciones = await Habitacion.findById(id);
    const { _id, ...resto } = req.body;
    const habitacionActualizado = await Habitacion.findOneAndUpdate(id, resto);
    //Buscar donde el id corresponda para actualizar
    res.json({ msg: "Habitacion actualizada", habitaciones });

}



const habitacionesDelete = async (req, res) => {
    const { id } = req.params;
    /*const habitacion=await habitacion.findByIdAndDelete(id);*/
    const habitacion = await Habitacion.findByIdAndUpdate(id, { estado: false });
    res.json({ msg: "habitacion eliminada" });


}
module.exports = { habitacionesPost, habitacionesGet, habitacionGet, habitacionesPut, habitacionesDelete };