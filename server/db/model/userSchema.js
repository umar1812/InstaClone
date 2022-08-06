const mongoose = require('mongoose')

const newSchema = new mongoose.Schema({
    img: {
        type: String,
        requires: true
    },
    author: {
        type: String,
        required: true,
        message: 'Please enter your name'
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: Math.floor(Math.random() * 150)
    },
    date: {
        type: Date,
        default: new Date
    }

})

const User = mongoose.model("User", newSchema)
module.exports = User;