const express=require('express');
const {validationResult}=require('express-validator');
const Reserva =require('../models/reserva');

///////////////CREAR/////////////////////

const reservasPost=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).jason(errors);
    }
    const{numero_reserva,id_habitacion,id_clientes,id_servicios}=req.body;
    const reserva=new Reserva ({numero_reserva,id_habitacion,id_clientes,id_servicios});
    const existeReserva=await Reserva.findOne({numero_reserva});
    if(existeReserva){
        return res.jason({msg:"la reserva ya existe"
        });
    }
    reserva.save();
    res.json({smg:"Reserva creada"});

}

/////////CONSULTAR TODAS///////////////

const reservasGet=async(req,res)=>{
    const reservas=await Reserva.find();
    res.json({msg:"lista de reservas",reservas});
}

///////////////CONSULTAR UNA SOLA////////

const reservaGet = async (req, res) => {
    /////////////CONSULTA CON MONGO (FIND)////////////////
    const {id}=req.params;
    const reserva=await Reserva.findById(id);
    
    
    if(!reserva){
        return res.json({msg:"reserva no encontrada"})
    }
    res.json({
        msg:"INFO del reserva",
        reserva
    });
    
///////////OTRA FORMA////////////////

        /* !reserva ? res.json({msg:"reserva no encontrado"}) : res.json({msg:"INFO del reserva",reserva});
        */
}


///////////Editar////////////
const reservaPut =async(req,res)=>{
    const {id}=req.params;
    const reserva=await Reserva.findById(id);
    if(!reserva){
        return res.json({msg:"reserva no encontrada"})
    }
//////////////COSAS QUE NO SE ACTUALIZAN////////////////
/////EL RESTO  INDICA QUE SE GUADAN EL RESTO DE ELEMENTOS QUE NO SE PUEDEN NODIFICAR ///////////////
    const{_id,... resto}=req.body
    const reservaActualizado=await Reserva.findByIdAndUpdate(id,resto);
    res.json({
        msg:"reserva Actualizada",
        reserva
    });
}
//////////BORRAR//////////////////
const reservaDelete = async (req, res) => {
    /////////////CONSULTA CON MONGO (FIND)////////////////
    
    const {id}=req.params;
    
    //const reserva=await reserva.findByIdAndDelete(id);
    const reserva=await Reserva.findByIdAndUpdate(id,{estado:false});
    if(!reserva){
        return res.json({msg:"reserva no encontrada"})
    }
    res.json({
        msg:"Estado de la reserva Actualizada",
        reserva
    });
}
module.exports = {
    reservasPost,
    reservasGet,
    reservaGet,
    reservaPut,
    reservaDelete
};