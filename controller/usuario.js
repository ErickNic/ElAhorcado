import { error } from "console";

export const crearUsuario = async (req,res,next) =>{
    const {contraseña,correo,nombre} = req.params;
    let correoexistente
    try{
        correoexistente = await usuario.findOne({correo:correo})        
    }