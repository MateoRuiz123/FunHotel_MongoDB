const {
    Schema,
    model
} = require('mongoose');

const ReservaSchema = Schema({
    numero_reserva: {
        type: Number,
        required: [true, "El campo nombre es requerido"],
        unique: true
    },

    id_habitacion: {
        type: Schema.Types.ObjectId,
        ref: "habitacion",
        required: [true, "El campo de id_habitacion es requerido"]
    },
    id_clientes: {
        type: Schema.Types.ObjectId,
        ref: "cliente",
        required: [true, "El campo de id_clientes es requerido"]
    },
    id_servicios: {
        type: Schema.Types.ObjectId,
        ref: "servicio",
        required: [true, "El campo de id_servicios es requerido"]
    },
    estado: {
        type: Boolean,
        default: true
    },

});
module.exports = model('Reserva', ReservaSchema);