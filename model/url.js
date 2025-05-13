const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unnique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    vistitedHistory: [{timeStamp:{type:Number}}],
    createdBy :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }
})

const Url = mongoose.model('url', urlSchema);

module.exports = Url;