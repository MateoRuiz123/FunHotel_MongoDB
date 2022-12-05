
const { Schema, model } = require('mongoose');

const Check_outSchema = Schema({
    fecha_sa:{
        type: String,
        required: [true, "La fecha de salida es requerida"],
    },
    check_in:{
        type:  Schema.Types.ObjectId,
        ref: "Check_in",
        required: true
    },
    metodo_pago:{
        type:  Schema.Types.ObjectId,
        ref: "Metodo_pago",
        required: true
    },
    ventas:{
        type:  Schema.Types.ObjectId,
        ref: "venta",
        required: true
    },
    cliente:{
        type:  Schema.Types.ObjectId,
        ref: "cliente",
        required: true
    },
    estado:{
        type: Boolean,
        default: true        
    }

}); 

module.exports = model('Check_out', Check_outSchema);