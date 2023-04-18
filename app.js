const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const models = require('./models')
const bodyParser = require('body-parser')
const Validator = require("fastest-validator");

// server creation
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

//use bodyparser
app.use(bodyParser.json())

//create one api post details 
app.post('/v1/send-emails', (req, res, next) => {
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
                res.json({
                    statusCode: 201,
                    message: "we will contact you",
                    info: result
                })
            })
            .catch(error => {
                res.json({
                    statusCode: 500,
                    message: "something went wrong",
                    error: error
                })
            });
    }
})


