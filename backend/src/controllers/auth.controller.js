import User from "../models/user.js"
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import "dotenv/config"

export const signup = async (req,res)=>{
    const{username, email, password} = req.body
    try{
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are required"});

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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword  = await bcrypt.hash(password,salt);

    //If user does not exist create a new user
    const newUser = new User({
        username, 
        email,
        password: hashedPassword
    });
    if(newUser){
        // generateToken(newUser._id, res);
        // await newUser.save();

    // Persist user first, then auth cookie
        const savedUser = await newUser.save();
         generateToken(savedUser._id, res);
    
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            profilepic: newUser.profilepic
        })
        try{
            await sendWelcomeEmail(savedUser.email, savedUser.username, process.env.CLIENT_URL)
    
        }
        catch(error){
            console.log("Failed to send welcome email:", error)
        }
    }
    else{
        res.status(400).json({message: "Invalid User data"})
    }
    // Send welcome email 

    }
    catch(error){
        console.log("Error in signup controller:", error)
        res.status(500).json({message: "Server Error"})

    }
}