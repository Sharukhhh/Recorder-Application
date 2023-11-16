import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password , salt);

    return hash;
}


export const generateToken = async(userId , emailId) => {
    const token = await jwt.sign({
        userId : userId , email : emailId} ,
        process.env.JWT_SECRET , {expiresIn : '1hr'});

    return token;
}