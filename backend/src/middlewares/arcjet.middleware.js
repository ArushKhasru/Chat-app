import aj from "../lib/arcjet.js";



export const arcjetProtection = async (req, res, next) =>{
    try{
        const decision = await aj.protect(req);
        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                return res.status(429).json({message: "Rate Limit Exceeded"})
            }
            else if(decision.reason.isBot()){
                return res.status(403).json({message: "No Acess for Bots"})
            }
            else{
                return res.status(403).json({message: "Request Blocked due to security policy"})
            }
        }
        next();

    }
    //check for the spoofed bots
    catch(error){
        console.log("Arcjet Protection Error", error);
        next();

    }
}