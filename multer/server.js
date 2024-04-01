const express= require('express');
const app = express();
const multer=require('multer');
const path = require('path');
const { title } = require('process');
app.use(express.json());

// app.set('view engine', "ejs");
// app.set('views', path.join(__dirname,'views'));

app.set('view engine','pug')
app.set('views', path.join(__dirname,'pug'));

let Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
  cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
        cb(null,file.originalname+"_"+Date.now()+ path.extname(file.originalname))
    }
})

let upload= multer({storage:Storage})

app.get('/ejs',(req,res)=>{
    res.render('index',
    {title:'multer'})
})
app.get('/pug',(req,res)=>{
    res.render('index',
    {title:'multer'})
})

app.post('/upload',upload.single('file'),(req,res)=>{
 res.send('file uploaded')
})

app.listen(9090,()=>{
    console.log('server runing on port 9090')
})