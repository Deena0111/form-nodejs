const models = require('../models')
const Joi=require('joi')

//create one api post details 
function sendEmail(req, res, next){
    const info = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    const schema = Joi.object({
        name:Joi.string().min(2).max(30).required(),
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        subject:Joi.string().min(10).max(100).required(),
        message:Joi.string().min(20).max(300).required()
    })
    validationResponse=schema.validate(info)
    if (validationResponse.error) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        })
    } else {
        models.contact.create(info)
            .then(result => {
                res.status(201).json({
                    message: "we will contact you",
                    info: result
                })
            })
            .then(result=>{
                models.email.create(email={
                    name:info.name,
                    email:info.email
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: "something went wrong",
                    error: error
                })
            });
    }
}
//create get all user data
function getAllMail(req,res){
    models.contact.findAll().then(result=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}
//delete receivedmail
function deleteMail(req,res){
    models.contact.destroy({where:{id:req.params.id}}).then(result=>{
        res.status(200).json({
            message:"Received mail deleted",
            contact:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:"something went wrong",
            err:err
        })
    })
}

module.exports={
    sendEmail:sendEmail,
    getAllMail:getAllMail,
    deleteMail:deleteMail
}




