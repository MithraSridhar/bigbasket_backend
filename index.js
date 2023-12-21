const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cors = require("cors")
const userRoute = require("./routes/userRoutes")
const itemRoute = require("./routes/itemRoutes")
const billRoute = require("./routes/billRoutes")

const app = express()
const PORT = 2000

//inbuilt middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to bigbasket App")
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongoose is connected")
    app.listen(PORT,()=> console.log("Server started on port", PORT))
})
.catch((err)=>{console.log("Error", err)})

app.use("/users",userRoute)
app.use("/items",itemRoute)
app.use("/bills",billRoute)