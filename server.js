const express=require('express');
const { errorHandler } = require('./middleware/ErrorHandler');
const dotenv=require('dotenv').config()

const app=express();
app.use(express.json());

const port=process.env.PORT ||8080;

app.use('/api/contact',require('./routes/contactComponents'))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});