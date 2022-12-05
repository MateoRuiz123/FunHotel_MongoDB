
const { Schema, model } = require('mongoose');

const Check_inSchema = Schema({
    reserva:{
        type:  Schema.Types.ObjectId,
        ref: "reserva",
        required: true
    },
    fecha_in:{
        type: String,
        required: [true, "La fecha de ingreso es requerido"],
    },
    estado:{
        type: Boolean,
        default: true        
    },
    cliente:{
        type:  Schema.Types.ObjectId,
        ref: "cliente",
        required: true
    },
}); 

module.exports = model('Check_in', Check_inSchema);