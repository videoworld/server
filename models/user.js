const mongoose = require('mongoose')
const bcrypt = require('../helpers/getBcrypt')
const Schema = mongoose.Schema


const userSchema = new Schema({
  name : {
    type : String
  },
  email : {
    type : String,
    trim : true,
    lowercase : true,
    required: 'must filled',
    unique : true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email format : email@mail.com']
  }
})


const User = mongoose.model('User', userSchema)

module.exports = User