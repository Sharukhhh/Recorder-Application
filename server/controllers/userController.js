import { User } from "../models/user.js";
import { generateToken, hashPassword } from "../helper/userHelper.js";
import bcrypt from 'bcrypt';



export const signup = async (req, res) => {
    try { 
        console.log(req.body);
        const { name , email , password , gender} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(401).json({message : 'User Exists'});
        }
        const encryptPassword = await hashPassword(password);

        let profileImage;

        if(gender === 'Male'){
            profileImage = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'
        } else {
            profileImage = 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png'
        }

        const newUser = new User({
            name , 
            email , 
            password : encryptPassword  , 
            gender,
            image : profileImage
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
            return res.status(401).json({message : 'User not found'});
        }

        const comparePassword = await bcrypt.compare(password , findUser.password);

        if(!comparePassword){
            return res.status(400).json({message : 'Passsword does not match'});
        } else {
            const token = generateToken(findUser._id , findUser.email);

            res.json({message : 'Login Successfull' , token,
            user: {
                name : findUser.name , email : findUser.email , 
                userId : findUser._id
            }});
        }
    } catch (error) {
        console.log(error);
    }
}

