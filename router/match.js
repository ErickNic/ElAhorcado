import express from 'express';
const router = express.Router();

router.post('/:letra',cogerLetra);


export {router as matchRoute}