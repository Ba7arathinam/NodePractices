const express=require('express');
const { errorHandler } = require('./middleware/ErrorHandler');
const dotenv=require('dotenv').config()
var cors=require('cors')
const app=express();
app.use(cors())
app.use(express.json());

const port=process.env.PORT ||8080;

app.use('/api/contact',require('./routes/contactComponents'))
app.use('/userData',require('./routes/userData'))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});