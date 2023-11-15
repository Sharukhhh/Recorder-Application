import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

import dotenv from 'dotenv';
dotenv.config()

import cors from 'cors';
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));

import connect from './utils/database.js';
connect();

import routes from './routes/user.js';
app.use('/' , routes);




const port = process.env.PORT || 5000; 
app.listen(port, () => {
    console.log(`server running`);
})