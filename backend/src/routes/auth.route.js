import express from 'express';
import { signup } from '../controllers/auth.controller';

const router = express.Router();

router.get("/signup",signup);
router.get("/login", (req,res)=>{
    res.send("it's Login");
})
router.get("/logout",(req,res)=>{
    res.send("it's Logout");
})


export default router;
