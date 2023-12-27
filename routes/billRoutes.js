const express = require("express");
const router = express.Router()
const billModel = require("../model/billModel")



//create bill
router.post('/charge-bill', async (req,res)=>{
    try{
        const newBill = new billModel(req.body)
       await newBill.save()  //create new item
       res.send("Bill saved successfully")
    }
    catch(error){
       res.status(400).json(error)
    }
})

//get bill
router.get('/get-bill', async (req,res)=>{
    try{
        const bills = await billModel.find()
       res.send(bills)
    }
    catch(error){
       res.status(400).json(error)
    }
})

//get bill by customerName
router.post('/get-bill-customer', async (req,res)=>{
    const customerName = req.body.customerName
    try{
        const customerBill = await billModel.find({customerName:customerName})
       res.send(customerBill)
    }
    catch(error){
       res.status(400).json(error)
    }
})

module.exports = router