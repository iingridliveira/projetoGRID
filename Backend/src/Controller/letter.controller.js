 import {letterEntity} from "../Entities/letter.entity.js"; 
letterEntity.sync();

const creatletter= async (req, res)=>{
    const{ title,text}= req.body;
  
    const newLetter = await  letterEntity.create({title,text})
    res.json(newLetter)

}
const getletter= async (req, res)=>{
    const letter = await letterEntity.findAll()
    res.json({letter})

}
export{creatletter, getletter}