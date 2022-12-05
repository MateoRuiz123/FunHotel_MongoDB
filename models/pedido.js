const {
    Schema,
    model
} = require('mongoose')

const PedidoSchema = Schema({
    reserva: {
        type: Schema.Types.ObjectId,
        ref: "reserva",
        required:[true, "El id de la reserva es requerido"]
    },
    cliente:{
        type: Schema.Types.ObjectId,
        ref: "cliente",
        required:[true, "El id del cliente es requerido"]
    },
    producto:{
        type:String,
        required:[true, "El producto es requerido"]
    },
    cantidad:{
        type:Number,
        required:[true, "La cantidad es requerida"]
    },
    estado:{
        type:Boolean,
        default:true
    }
})

module.exports = model('Pedido', PedidoSchema)