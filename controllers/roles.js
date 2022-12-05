const express = require('express');
const { validationResult } = require('express-validator');
const Role = require('../models/role');

const rolesPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const body = req.body;
    const role = new Role(body);
    role.save();
    res.json({
        msg: " Rol registrado correctamente",
        role
    });
};

const rolesGet = async (req, res) => {

    const roles = await Role.find();

    res.json({
        msg: "Lista de roles",
        roles
    });
}

const roleGet = async (req, res) => {
    const { id } = req.params;
    const role = await Role.findById(id);
    !role ?
        res.json({ msg: "Rol no encontrado" }) : res.json({ msg: "Informacion del Rol", role });

}

const rolesPUT = async (req, res) => {
    const { id } = req.params;
    const roles = await Role.findById(id);
    const { _id, ...resto } = req.body;
    const roleActualizado = await Role.findByIdAndUpdate(id, resto);
    //Buscar donde el id corresponda para actualizar
    res.json({ msg: "Rol actualizado", roles });

}

const rolesDelete = async (req, res) => {
    const { id } = req.params;
    /* const usuario = await Usuario.findByIdAndDelete(id); */
    const role = await Role.findByIdAndUpdate(id, { estado: false });
    res.json({ msg: "Rol eliminado" });

}

module.exports = { rolesPost, rolesGet, roleGet, rolesPUT, rolesDelete }