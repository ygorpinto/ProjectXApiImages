import express from 'express'
import multer from 'multer';
import multerConfig from './config/multer.js'

const router = express.Router();


router.get('/',(req,res)=>{
    return res.status(200).send({status:"running"});
});

router.post('/add', multer(multerConfig).single('file') ,(req,res,next)=>{
    console.log(req.file);
    next();
    return res.status(200).send({status:"Arquivo enviado com sucesso"});
});


export default router;