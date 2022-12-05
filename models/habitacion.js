const { Schema, model } = require('mongoose');

const HabitacionSchema = Schema({
    numero_camas: {
        type: Number,
        required: [true, "El numero de camas es requerido"]
    },
    numero_toallas: {
        type: Number,
        required: [true, "El numero de toallas es requerido"]
    },
    numero_gaseosas: {
        type: Number,
        required: [true, "El numero de gaseosas es requerido"]
    },
    numero_papas: {
        type: Number,
        required: [true, "El numero de papas es requerido"]
    },
    documento: {
        type: Number,
        required: [true, "Documento requerido"],
        default: 000
    },
    estado: {
        type: Boolean,
        default: true
    }

});
module.exports = model('Habitacion', HabitacionSchema);