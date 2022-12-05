const express=require('express');
const {validationResult}=require('express-validator');
const Venta =require('../models/venta');

///////////////CREAR/////////////////////

const ventasPost=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).jason(errors);
    }
    const{fecha_llegada,fecha_salida}=req.body;
    const venta=new Venta ({fecha_llegada,fecha_salida});
    /* const existeNombre=await Venta.findOne({nombre});
    if(existeNombre){
        return res.jason({msg:"El Nombre ya existe"
        });
    } */
    venta.save();
    res.json({smg:"venta creado"});

}

/////////CONSULTAR TODAS///////////////

const ventasGet=async(req,res)=>{
    const ventas=await Venta.find();
    res.json({msg:"lista de ventas",ventas});
}

///////////////CONSULTAR UNA SOLA////////

const ventaGet = async (req, res) => {
    /////////////CONSULTA CON MONGO (FIND)////////////////
    const {id}=req.params;
    const venta=await Venta.findById(id);
    
    
    if(!venta){
        return res.json({msg:"venta no encontrada"})
    }
    res.json({
        msg:"INFO del venta",
        venta
    });
    
///////////OTRA FORMA////////////////

        /* !venta ? res.json({msg:"venta no encontrado"}) : res.json({msg:"INFO del venta",venta});
        */
}


///////////Editar////////////
const ventaPut =async(req,res)=>{
    const {id}=req.params;
    const venta=await Venta.findById(id);
    if(!venta){
        return res.json({msg:"venta no encontrada"})
    }
//////////////COSAS QUE NO SE ACTUALIZAN////////////////
/////EL RESTO  INDICA QUE SE GUADAN EL RESTO DE ELEMENTOS QUE NO SE PUEDEN NODIFICAR ///////////////
    const{_id,... resto}=req.body
    const ventaActualizado=await Venta.findByIdAndUpdate(id,resto);
    res.json({
        msg:"venta Actualizada",
        venta
    });
}
//////////BORRAR//////////////////
const ventaDelete = async (req, res) => {
    /////////////CONSULTA CON MONGO (FIND)////////////////
    
    const {id}=req.params;
    
    //const venta=await venta.findByIdAndDelete(id);
    const venta=await Venta.findByIdAndUpdate(id,{estado:false});
    if(!venta){
        return res.json({msg:"venta no encontrada"})
    }
    res.json({
        msg:"Estado de la venta Actualizada",
        venta
    });
}
module.exports = {
    ventasPost,
    ventasGet,
    ventaGet,
    ventaPut,
    ventaDelete
};