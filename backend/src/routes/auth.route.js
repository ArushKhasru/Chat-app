import express from 'express';

const router = express.Router();

router.get("/signup", (req,res)=>{
    res.send("It's SignUp");
})
router.get("/login", (req,res)=>{
    res.send("it's Login");
})
router.get("/logout",(req,res)=>{
    res.send("it's Logout");
})


export default router;
