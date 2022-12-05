const {Schema, model } = require('mongoose');

const SalaSchema = Schema({
    ficha: {
        type: Number,
        required: [true, 'La ficha es obligatoria'],
        
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        
    },
    temporada: {
        type: String,
        required: [true, 'La temporada es obligatoria'],
        
    },
    dificultad: {
        type: String,
        required: [true, 'La dificultad es obligatoria'],
        
    },
    estado:{
        type: Boolean,
        default: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: [true, "El usuario es querido"]
    }
});

module.exports = model('Sala', SalaSchema);