const express = require('express');
require('./db/connection')
const User = require('./db/model/userSchema')
const cors = require('cors')
const port = process.env.PORT || 5000;

const app = express()
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post('/form', async (req, res) => {
    try {
        console.log(req.body)
        const user = new User({
            img: req.body.img,
            author: req.body.author,
            location: req.body.location,
            description: req.body.description

        })

        const newUser = await user.save()
        console.log("Post added successfully")
        console.log(newUser)
        res.status(201).send(newUser)
    } catch (err) {
        res.send(err.message).status(500)
        console.log(err.message)
    }
})

app.get('/postView', async (req, res) => {
    try {
        const data = await User.find().sort({ _id: -1 });
        res.send(data).status(200)
    } catch (err) {
        res.send(err.message).status(500)
        console.log(err.message)
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})