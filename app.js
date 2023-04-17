const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const models = require('./models')
const bodyParser = require('body-parser')

// server creation
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})

//use bodyparser
app.use(bodyParser.json())

//create one api post details 
app.post('/v1/send-emails', (req, res) => {
    const info = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    models.contact.create(info).then(result => {
        return res.status(201).json({
            message: "we will contact you",
            info: result
        }).catch(error => {
            return res.status(500).json({
                message: "something went wrong",
                error: error
            })
        })
    })
})

