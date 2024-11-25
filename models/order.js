const mongoose=require("mongoose");

//Schema for orders
const OrdersSchema=new mongoose.Schema({
    
    Email: {
        type:String,
        required:false,
        unique:false,
    },
    Date: {
        type:String,
        required:false,
        unique:false,
    },
    Dishes: {
        type:[String],
        required:false,
        unique:false,
    },
    Price: {
        type:String,
        required:false,
        unique:false,
    },
    });

    const order=mongoose.model('Orders',OrdersSchema);
    module.exports=order;
