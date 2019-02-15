require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')
const port = process.env.PORT
const cors = require('cors')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/video-world', { useNewUrlParser: true, useCreateIndex: true,});

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`listening to port, ${port}`)
})