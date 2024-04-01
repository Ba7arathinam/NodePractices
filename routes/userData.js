const express=require('express')
const { LoginData } = require('../controller/userController')
 const router=express.Router()

 router.route('/').post(LoginData)

 module.exports =router