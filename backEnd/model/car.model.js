const mongoose = require('mongoose')


const carSchema = new mongoose.Schema({
    vehicleBrandName:{
        type:String,
        required:true
    },
    vehicleRegNumber:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required:true
    },
   description:{
        type:String,
        required:true
        
    }
   
})

module.exports = mongoose.model('car',carSchema)