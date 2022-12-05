const {
    Schema,
    model
} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    ficha: {
        type: Number,
        required: [true, 'La ficha es obligatoria'],
    },
    documento: {
        type: Number,
        required: [true, 'El documento es obligatorio'],
    },
    estado: {
        type: Boolean,
        default: true
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    }
});

module.exports = model('Usuario', UsuarioSchema);