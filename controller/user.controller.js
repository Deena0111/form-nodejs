const models=require('../models')

function getUser(req,res){
    models.user.findAll().then(result=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}

module.exports={
    getUser:getUser
}