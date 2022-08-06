const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://humour9:instaclonepass1@cluster0.genzlnd.mongodb.net/instaclone?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(console.log('Connected to database'))
    .catch((err) => { console.log(err.message) })