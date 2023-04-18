const express = require('express')
const contactController=require('../controller/contact.controller')

const router=express.Router();

router.post('/v1/send-emails',contactController.sendEmail)


module.exports=router;