const  mongoose = require('mongoose')

const billSchema=mongoose.Schema(
    {
        customerName: {type: String,required: true},
        customerPhoneNumber: {type: Number,required: true},
        totalAMount: {type: Number,required: true},
        tax: {type: Number,required: true},
        //calculate tax => 2% => ((2*totalamount)/100))
        subTotal: {type: Number,required: true},
        paymentMode: {type: String,required: true},
        cartItems: {type: Array,required: true}
    },
    {timestamps: true}
)

const billModel = mongoose.model("bills", billSchema)

module.exports = billModel