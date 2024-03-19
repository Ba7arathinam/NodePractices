// const express=require('express')


const getContact=(req,res)=>{
    res.status(200).json({message:'Get all'})
}
const PostContact=(req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        res.status(404)
        throw new Error("All Feilds are required")
    }
    console.log('your posted content is' + JSON.stringify(req.body))
    res.status(200).json({message:'Post data'})
}
const getConatctById=(req,res)=>{
    res.status(200).json({message:`Get user is ${req.params.id}`})
}

const UpdateContactById=(req,res)=>{
    res.status(200).json({message:`Upadted user id is ${req.params.id}`})
}

const deleteContactById=(req,res)=>{
    res.status(200).json({message:`Delete user id is ${req.params.id}`})
}
module.exports = {getContact,getConatctById,PostContact,UpdateContactById,deleteContactById}