const models = require('../models')
const Validator = require("fastest-validator");

//create one api post details 
function sendEmail(req, res, next){
    const info = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    const schema = {
        name: { type: "string", optional: false, min: "2", max: "30"},
        email: { type: "email", optional: false },
        subject: { type: "string", optional: false, min: "10", max: "200" },
        message: { type: "string", optional: false, min: "20", max: "500" }
    }
    const v = new Validator();
    const validationResponse = v.validate(info, schema);
    if (validationResponse !== true) {
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
            .catch(error => {
                res.status(500).json({
                    message: "something went wrong",
                    error: error
                })
            });
    }
}
module.exports={
    sendEmail:sendEmail
}




