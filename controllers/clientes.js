const express = require("express");
const { validationResult } = require("express-validator");
const Cliente = require("../models/cliente");

const clientesPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const body = req.body;
    const cliente = new Cliente(body);
    cliente.save();
    res.json({
        msg: " cliente registrado correctamente",
        cliente,
    });
};

const clientesGet = async (req, res) => {
    const clientes = await Cliente.find();

    res.json({
        msg: "Lista de clientes",
        clientes,
    });
};

const clienteGet = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);
    !cliente
        ? res.json({ msg: "Cliente no encontrado" })
        : res.json({ msg: "Informacion del cliente", cliente });
};

const clientesPUT = async (req, res) => {
    const { id } = req.params;
    const clientes = await Cliente.findById(id);
    const { _id, ...resto } = req.body;
    const clienteActualizado = await Cliente.findByIdAndUpdate(id, resto);
    //Buscar donde el id corresponda para actualizar
    res.json({ msg: "Cliente actualizado", clientes });
};

const clientesDelete = async (req, res) => {
    const { id } = req.params;
    /* const usuario = await Usuario.findByIdAndDelete(id); */
    const cliente = await Cliente.findByIdAndUpdate(id, { estado: false });
    res.json({ msg: "Cliente eliminado" });
};

module.exports = {
    clientesPost,
    clientesGet,
    clienteGet,
    clientesPUT,
    clientesDelete,
};
