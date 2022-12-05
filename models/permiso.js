const {Schema, model } = require('mongoose');

const PermisoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    estado:{
        type: Boolean,
        default: true/* ,
        required: true */
    },
    descripcion:{
        type: String,
        required: [true, 'La descripcion es obligatoria']
    }
});

module.exports = model('Permiso', PermisoSchema);