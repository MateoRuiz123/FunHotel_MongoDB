const { Schema, model } = require('mongoose');

const Metodo_pagoSchema = Schema({
    nombre:{
        type: String,
        required: [true, "El nombre del metodo de pago es requerido"],
    },
    estado:{
        type: Boolean,
        default: true        
    },
}); 

module.exports = model('Metodo_pago', Metodo_pagoSchema);