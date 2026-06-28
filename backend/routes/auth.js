const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const User=require("../models/User");

const router=express.Router();

router.post("/signup",async(req,res)=>{

    const{name,email,password}=req.body;

    if(!name||!email||!password){

        return res.status(400).json({
            message:"All fields required"
        });

    }

    const existingUser=await User.findOne({email});

    if(existingUser){

        return res.status(400).json({
            message:"User already exists"
        });

    }

    const hashedPassword=await bcrypt.hash(password,10);

    const user=new User({

        name,
        email,
        password:hashedPassword

    });

    await user.save();

    res.status(201).json({

        message:"Signup successful"

    });

});

module.exports=router;