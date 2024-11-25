const mongoose=require("mongoose");

//Schema for users
const UserSchema=new mongoose.Schema({
    
    Name: {
        type:String,
        required:false,
        unique:false,
    },
    Email: {
        type:String,
        required:false,
        unique:false,
    },
    Password: {
        type:String,
        required:false,
        unique:false,
    },
    Address: {
        type:String,
        required:false,
        unique:false,
    },
    });

    const user=mongoose.model('Users',UserSchema);
    module.exports=user;
