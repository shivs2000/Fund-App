const User=require('../models/User');
const bcrypt=require('bcrypt');
const login=async (req,res)=>{
    try{
   const user=await User.findOne({username:req.body.username});
   !user && res.status(400).json("WRONG CREDENTIALS!!!");
 
   const validated=await bcrypt.compare(req.body.password,user.password);
   !validated && res.status(400).json("WRONG CREDENTIALS!!!");
   
   const {password,...others}=user._doc;
   res.status(200).json(others);
 
 
 
 
    }catch(err){
   res.status(500).json(err);
   console.log(err);
  }
 
 
 }
 module.exports=login;