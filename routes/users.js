const express=require('express')
const userController=require('../controller/user.controller')

const router=express.Router()

router.get('/v1/getUsers',userController.getUser)

module.exports=router