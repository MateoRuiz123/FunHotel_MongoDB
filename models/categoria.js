const {
    Schema,
    model
} = require('mongoose')

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        unique: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es requerida']
    },
    estado: {
        type: Boolean,
        default: true
    }
})

module.exports = model('Categoria', CategoriaSchema)