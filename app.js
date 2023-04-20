const express = require('express')
const app = express()
const bodyParser=require('body-parser');


const contactRoute=require('./routes/contacts')
const userRoute=require('./routes/users')

app.use(bodyParser.json());

app.use('/',contactRoute)
app.use('/',userRoute)

module.exports=app



