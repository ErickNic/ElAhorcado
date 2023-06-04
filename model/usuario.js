import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator'
const Squema = mongoose.Schema;

const usuario = new Squema({
    nombre:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    contraseña:{type:String,required:true},
},{collection:'usuarios'})

usuario.plugin(mongooseUniqueValidator);

export default mongoose.model('usuario', usuario);