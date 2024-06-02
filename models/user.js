mongoose=require("mongoose");
//Schema
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    name:{
        type:String,

    },
    email:{
        type:String,
        //required:true,
        unique:true 
    },
    phone:{
        type:Number
    }
});
//Model
const User=mongoose.model('user',userSchema);
module.exports=User;