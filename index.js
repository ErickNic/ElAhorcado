import express from 'express';
import mongoose from 'mongoose';
import { matchRoute } from './router/match';
import { userRoute } from './router/usuario';
import 'dotenv/config'
const app = express();
const PORT = 3001 || process.env.PORT


app.use('/match', matchRoute)
app.use('/user', userRoute)
mongoose
    .connect(`mongodb+srv:${process.env.USER_DB}//${Hola2023erick}:@cluster0.j1h5gwg.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`'App listening on port ${PORT}'`)
        });
    })