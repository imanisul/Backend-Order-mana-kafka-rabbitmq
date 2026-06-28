const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
       customerName: {
        type: String,
        required: true
       },
       product : {
        type: String,
        required: true
       },
       quantity: {
        type: Number,
        required: true
       },
       price: {
        type: Number,
        required: true
       }, 
       status: {
        type: String,
        enum: ["PENDING", "PROCESSING", "COMPLETED", "CANCELLED"],
        default: "PENDING"
       }
    }, {timestamps: true});

module.exports = mongoose.model("Order", orderSchema);