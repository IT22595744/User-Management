const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const regiSchema=new Schema({
    name:{
        type:String,//datatype
        required:true//validate
    },
    gmail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   
})

module.exports=mongoose.model(
    "Register",//file name
    regiSchema //function name
)