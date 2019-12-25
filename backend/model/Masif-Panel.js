const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mp = new Schema({

    agac_turu:{
        type:String
    },
    agac_kalitesi:{
        type:String
    },
    agac_kalinligi:{
        type:Number
    },
    agac_eni:{
        type:Number
    },
    agac_boyu:{
        type:Number
    },
    kayit_tarihi:{
        type: Date
    },
    agac_notu:{
        type: String
    }
},{
    collection: 'agaclar'
})
module.exports = mongoose.model('Mp', Mp)