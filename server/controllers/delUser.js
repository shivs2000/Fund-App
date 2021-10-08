const User=require('../models/User');
const deleteUser=async (req,res)=>{
    
        try{
              


            const user=await User.findById(req.body.id);
            if(user){
                try{
                    
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json('DELETED');
                  }
                  catch(err){
                       res.status(500).json(err);
                   }


            }

        }catch(err){
            res.status(500).json('User Not Found');
        }
     
      
 
 
 
 }
 module.exports=deleteUser;