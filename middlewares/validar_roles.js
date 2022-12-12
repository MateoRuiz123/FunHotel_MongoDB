const express = require('express');
const jwt = require('jsonwebtoken');

const esAdminRole = (req, res, next) => {
    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }

    const {rol,nombre} = req.usuario;

    if (rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `${nombre} no es Admin, no se puede realizar la acción`
        })
    }
    next();
}

const esUserRole = (req, res, next) => {
    if(!req.usuario){
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }

    const {rol,nombre} = req.usuario;

    if (rol !== 'USER_ROLE') {
        return res.status(401).json({
            msg: `${nombre} no es User, no se puede realizar la acción`
        })
    }
    next();
}

module.exports = {
    esAdminRole,
    esUserRole
}