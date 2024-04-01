let jwt=require('jsonwebtoken')

let users=[{
  "email":"bala@123",
  "password":"password123",
},{
    "email":"aparna@123",
    "password":"password123",
  }]

const LoginData=(req,res)=>{
    let emails = req.body.email
    let passwords = req.body.password
    const user = users.find(user => user.email === emails && user.password === passwords);    
    if(user){
        var token = jwt.sign({ email: user.email,password:user.password }, 'mmmmbu');
        res.json({token})
    }else{
        res.send("user not found")
    }
   
}
module.exports={LoginData}