const express=require('express');
const {validationResult}=require('express-validator');
const Catalogo =require('../models/catalogo');

///////////////CREAR/////////////////////

const catalogosPost=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).jason(errors);
    }
    const{nombre,description}=req.body;
    const catalogo=new Catalogo ({nombre,description});
    const existeNombre=await Catalogo.findOne({nombre});
    if(existeNombre){
        return res.jason({msg:"El Nombre ya existe"
        });
    }
    catalogo.save();
    res.json({smg:"catelogo creado"});

}

/////////CONSULTAR TODAS///////////////

const catalogosGet=async(req,res)=>{
    const catalogos=await Catalogo.find();
    res.json({msg:"lista de catalogos",catalogos});
}

///////////////CONSULTAR UNA SOLA////////

const catalogoGet = async (req, res) => {
    /////////////CONSULTA CON MONGO (FIND)////////////////
    const {id}=req.params;
    const catalogo=await Catalogo.findById(id);
    
    
    if(!catalogo){
        return res.json({msg:"catalogo no encontrada"})
    }
    res.json({
        msg:"INFO del catalogo",
        catalogo
    });
    
///////////OTRA FORMA////////////////

        /* !catalogo ? res.json({msg:"catalogo no encontrado"}) : res.json({msg:"INFO del catalogo",catalogo});
        */
}


///////////Editar////////////
const catalogoPut =async(req,res)=>{
    const {id}=req.params;
    const catalogo=await Catalogo.findById(id);
    if(!catalogo){
        return res.json({msg:"catalogo no encontrada"})
    }
//////////////COSAS QUE NO SE ACTUALIZAN////////////////
/////EL RESTO  INDICA QUE SE GUADAN EL RESTO DE ELEMENTOS QUE NO SE PUEDEN NODIFICAR ///////////////
    const{_id,... resto}=req.body
    const catalogoActualizado=await Catalogo.findByIdAndUpdate(id,resto);
    res.json({
        msg:"catalogo Actualizada",
        catalogo
    });
}
//////////BORRAR//////////////////
const catalogoDelete = async (req, res) => {
    /////////////CONSULTA CON MONGO (FIND)////////////////
    
    const {id}=req.params;
    
    //const catalogo=await catalogo.findByIdAndDelete(id);
    const catalogo=await Catalogo.findByIdAndUpdate(id,{estado:false});
    if(!catalogo){
        return res.json({msg:"catalogo no encontrada"})
    }
    res.json({
        msg:"Estado de la catalogo Actualizada",
        catalogo
    });
}
module.exports = {
    catalogosPost,
    catalogosGet,
    catalogoGet,
    catalogoPut,
    catalogoDelete
};