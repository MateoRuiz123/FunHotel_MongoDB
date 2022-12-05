const{Schema,model}=require('mongoose');

const VentaSchema=Schema({
    fecha_llegada:{
        type:String,
        required:[true,"La fecha de llegada es requerida"],
    },
    fecha_salida:{
        type:String,
        required:[true,"La fecha de salida es requerida"],
    },
    estado:{
        type:Boolean,
        default:true
    }

});
module.exports=model('Venta', VentaSchema);