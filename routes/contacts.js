const express = require('express')
const contactController=require('../controller/contact.controller')

const router=express.Router();

router.post('/v1/send-emails',contactController.sendEmail)
router.get('/v1/getAllMails',contactController.getAllMail)
router.delete('/v1/delete/:id',contactController.deleteMail)


module.exports=router;