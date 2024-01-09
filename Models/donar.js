const mongoose = require("mongoose")
const donor = new mongoose.Schema({
name:{
    type:String,
    required:true
},
addr:{
    type:String,
    required:true
},
mob:{
    type:Number,
    required:true,
},
email:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true 
},

weight:{
    type:String,
    required:true
},
d_bags:{
    type:String,
    required:true
},
blood_group:{
    type:String,
    required:true
},
dob:{
type:String,
required:true
},
ldod:{
    type:String,
    required:true
}

})

const donors = mongoose.model("donor",donor);
module.exports = donors;