const mongoose=require("mongoose");

//Schema for dishes
const DishesSchema=new mongoose.Schema({
    
    Name: {
        type:String,
        required:false,
        unique:false,
    },
    Description: {
        type:String,
        required:false,
        unique:false,
    },
    Ingredients: {
        type:[String],
        required:false,
        unique:false,
    },
    });

    const dish=mongoose.model('Dishes',DishesSchema);
    module.exports=dish;
