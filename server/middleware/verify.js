const jwt=require("jsonwebtoken");
const keys=require("../config/key");

module.exports={
    verifyToken:(req,res,next)=>{
        const header=req.headers.authorization || req.body.token;
        
        if(!header){
            return res.status(401).json({error:"auth failed, login"});
        }
        const split=header.split(" ");
        jwt.verify(split[1],keys.secret,(error,decoded)=>{
            if(error){
                return res.status(401).json({error:"auth failed"});
            }
            if(decoded){
            req.user=decoded;
            next();
            }else{
                return res.status(401).json({error:"auth failed"});
            }
        })
    }
}


