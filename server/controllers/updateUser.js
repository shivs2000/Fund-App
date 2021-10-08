const User=require('../models/User');

const updateUser=async (req,res)=>{
    
        if(req.body.password){
        const salt= await bcrypt.genSalt(10);
        req.body.password=await bcrypt.hash(req.body.password,salt);
 
        }
    
     try{
      const userUpdated=await User.findByIdAndUpdate(
         req.params.id,
         {
             $set:req.body
         },
         {new:true}
 
 
 
      );
      res.status(200).json(userUpdated);
 
 
 
     }catch(err){
         res.status(500).json(err);
     }
     
 
 
 
 
 }
 module.exports=updateUser;