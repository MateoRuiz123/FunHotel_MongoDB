const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El campo nombre es requerido"],
        unique: true
    },
    apellido: {
        type: String,
        required: [true, "El campo apellido es requerido"],
        unique: true
    },
    edad: {
        type: Number,
        default: true
    },
    correo: {
        type: String,
        required: [true, "El correo es requerido"],
        unique: true
    },
    tipo_documento: {
        type: Number,
        default: true
    },
    celular: {
        type: Number,
        default: true
    },

});

module.exports = model('Cliente', ClienteSchema);