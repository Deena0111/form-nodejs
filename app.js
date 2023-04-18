const express = require('express')
const app = express()
const bodyParser=require('body-parser');


const contactRoute=require('./routes/contacts')

app.use(bodyParser.json());

app.use('/',contactRoute)

module.exports=app



