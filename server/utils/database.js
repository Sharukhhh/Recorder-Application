import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/recorder-app');

        console.log('connected');

    } catch (error) {
        console.log('failed' , error);
    }
}

export default connect;