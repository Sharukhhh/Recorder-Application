import mongoose from "mongoose";


const userSchema = mongoose.Schema({

    name :{
        type: String,
        required : true
    },

    email : {
        type : String,
        required : true,
        match : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },

    password : {
        type : String,
        required : true
    },

    image : {
        type : String,
        default : ''
    },

    gender : {
        type : String,
        required : true
    }
});

export const User = mongoose.model('users' , userSchema);
