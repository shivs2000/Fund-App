const User=require('../models/User');
const bcrypt=require('bcrypt');

const createUser=async (req,res)=>{
    try{
       
        const salt=await bcrypt.genSalt(10);
       
        const hashpass=await bcrypt.hash(req.body.password,salt)
        
    const newUser=new User({
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:hashpass,
    });
    const user=await newUser.save();
    res.status(200).json(user);
  
    }
    catch(err){
      res.status(500).json(err);
      console.log(err);
  
    }
   
  
  
  }

 module.exports=createUser;