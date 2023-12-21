const express = require("express");
const router = express.Router()
const userModel = require("../model/userModel")



router.post('/register', async (req,res)=>{
    try{
        const newUser = new userModel({...req.body,verified:true})
       await newUser.save()  //create new user
       res.send("User registered successfully")
    }
    catch(error){
        res.send({message: "Error during registration"})
    }
})

router.post('/login', async (req,res)=>{
    try{
        const user =  await userModel.findOne({
            userId:req.body.userId,
            password:req.body.password,
            verified:true
        })
        if(user){
            res.send(user)
        }
        else{
            res.send({message: "Login failed" , user})
        }
    }
    catch(error){
        res.status(400).json(error)
        //res.send({message: "Error while loggin in"})
    }
})

module.exports = router