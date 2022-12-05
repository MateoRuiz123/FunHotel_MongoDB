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
        default: 00
    },
    correo: {
        type: String,
        required: [true, "El correo es requerido"],
        unique: true
    },
    tipo_documento: {
        type: String,
        required:"El tipo de documento es requerido",
        enum:["CC","CE","TI"]
    },
    celular: {
        type: Number,
        default: 000
    },
    estado:{
        type:Boolean,
        default:true
    }

});

module.exports = model('Cliente', ClienteSchema);