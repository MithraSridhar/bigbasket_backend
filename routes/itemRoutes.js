const express = require("express");
const router = express.Router()
const itemModel = require("../model/itemsModel")



//create item
router.post('/add-items', async (req,res)=>{
    try{
        const newItem = new itemModel(req.body)
       await newItem.save()  //create new item
       res.send("Item added successfully")
    }
    catch(error){
       res.status(400).json(error)
    }
})

//get items
router.get('/get-items', async (req,res)=>{
    try{
        const Item = await itemModel.find()
       res.send(Item)
    }
    catch(error){
       res.status(400).json(error)
    }
})

//delete items
router.delete('/delete-items', async (req,res)=>{
    try{
        const items = await itemModel.findOneAndDelete({_id:req.body.itemId})
        items? res.send("Item deleted successfully") : res.status(401).send({message: "Item not found"})
    }
    catch(error){
       res.status(400).json(error)
    }
})

//update items
router.post('/edit-items', async (req,res)=>{
    try{
        const items = await itemModel.findOneAndUpdate({_id:req.body.itemId},req.body)
        res.send("Item updated successfully")
    }
    catch(error){
       res.status(400).json(error)
    }
})

module.exports = router