const { Schema, model } = require('mongoose');

const HabitacionSchema = Schema({
    numero_camas: {
        type: Number,
        required: [true, "El numero de camas es requerido"],
        unique: true
    },
    numero_toallas: {
        type: Number,
        required: [true, "El numero de toallas es requerido"],
        unique: true
    },
    numero_gaseosas: {
        type: Number,
        required: [true, "El numero de gaseosas es requerido"],
        unique: true
    },
    numero_papas: {
        type: Number,
        required: [true, "El numero de papas es requerido"],
        unique: true
    },
    documento: {
        type: Number,
        default: true
    },
    estado: {
        type: Boolean,
        default: true
    }

});
module.exports = model('Habitacion', HabitacionSchema);