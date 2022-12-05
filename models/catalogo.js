const{Schema,model}=require('mongoose');

const CatalogoSchema=Schema({
    nombre:{
        type:String,
        required:[true,"El campo nombre es requerido"],
        unique:true
    },
    descripcion:{
        type:String
    },
    estado:{
        type:Boolean,
        default:true
    }

});
module.exports=model('Catalogo', CatalogoSchema);