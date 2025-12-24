import User from "../models/user.js"
export const signup = async (req,res)=>{
    const{username, email, password} = req.body
    try{
        if(!username || !email || !password){
            return res.body.status(400).json({message: "All fields are required"});

        }
        // to check the password strength
        if(password.length <6){
            return res.status(400).json({message: "Password must be at least 6 characters long"});
        }
        //To check if email is valid
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message: "Please enter a valid email "})
        }
        //To check if user already exists or not
        const user = await User.findOne({email});
        if(user){
            return res.status (400).json({message: "User already exists"});
        }
    //For hashed Password
    const salt = await bcrypt.gensalt(10);
    const hashedPassword  = await bcrypt.hashedPassword(password,salt);

    }
    catch(error){

    }
}