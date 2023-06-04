import mongoose from 'mongoose';

const Squema = mongoose.Schema;

const matchSquema = new Squema({
    nombre:{type:String,required:true},
    
})