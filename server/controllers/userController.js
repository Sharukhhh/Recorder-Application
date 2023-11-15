import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password , salt);

    return hash;
}


export const signup = async (req, res) => {
    try { 
        console.log(req.body);
        const { name , email , password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(401).json({message : 'User Exists'});
        }
        const encryptPassword = await hashPassword(password);

        const newUser = new User({
            name , email , password : encryptPassword 
        });

        await newUser.save();

        res.json({message : 'Account Created'});
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    try {
        const {email , password} = req.body;

        const findUser = await User.findOne({email});

        if(!findUser){
            return res.status(401).json({error : 'User not found'});
        }

        const comparePassword = await bcrypt.compare(password , findUser.password);

        if(!comparePassword){
            return res.status(400).json({error : 'Passsword does not match'});
        } else {
            const token = jwt.sign({userId : findUser._id , email : findUser.email} , process.env.JWT_SECRET , {expiresIn : '1hr'});

            res.json({message : 'Login Successfull' , token,
            user: {
                name : findUser.name , email : findUser.email , 
            }});
        }
    } catch (error) {
        console.log(error);
    }
}

