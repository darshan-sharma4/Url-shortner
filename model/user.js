const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    role: {
        require: true,
        type: String,
        default: "Normal",
    },
    password: {
        type: String,
        require: true,
    }
}, { timeStamp: true })

const User = mongoose.model('user', userSchema);
module.exports = User;