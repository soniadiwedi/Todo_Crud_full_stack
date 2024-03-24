const mongoose = require("mongoose");

const UserSchema=mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String}
},{
  versionKey:false
})
const UserModel= mongoose.model("Users",UserSchema);

module.exports={
    UserModel
}

// {

//   "email":"sonia123@gmail.com",
//   "password":"123456"
// }