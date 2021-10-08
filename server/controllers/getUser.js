const User=require('../models/User');
const getUser=async (req,res)=>{
    try{
   const user=await User.findById(req.body.id);
   const {password,...others}=user._doc;
   res.status(200).json(others);

    }catch(err){

       res.status(500).json(err);
    }



}
module.exports=getUser;