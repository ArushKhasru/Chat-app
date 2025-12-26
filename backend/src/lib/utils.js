import jwt from "jsonwebtoken";
export const generateToken =(userId, res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn:"7d",
    });
    res.cookie("jwt", token ,{
        maxAge: 7*24*60*1000,
        httpOnly: true, //to prevent cross site scripting or xss
        sameSite: "strict", //to prevent cross site request forgery
        secure: process.env.NODE_ENV === "development"?false:true,
    })
    return token;
}