const User = require('../models/user')
const jwt = require('jsonwebtoken')

class UserController { 

  static loginByGoogle(req, res){
    const {OAuth2Client} = require('google-auth-library')
    const CLIENT_ID = "1061187022160-pvscbjvom1vrfjadl355hcv5hjf19kb3.apps.googleusercontent.com"
    const client = new OAuth2Client(CLIENT_ID)
    let user = null
    client.verifyIdToken({
      idToken : req.body.token,
      audience : CLIENT_ID
    })
    .then(ticket => {
      user = ticket.getPayload()
      return User.findOne({
        email : user.email
      })
  
    })
    .then(findUser => {
      if(findUser == null) {
        return User.create({
          email : user.email,
          name : user.given_name + " " + user.family_name
        })
        .then(user => {
          const token = jwt.sign( {
            email : user.email
          }, process.env.SECRET_JWT, {expiresIn : '1h'})
          res.status(200).json({id : user._id, token : token, name: user.name})
        })
      } else {
        user = findUser
        const token = jwt.sign( {
          email : user.email
        }, process.env.SECRET_JWT, {expiresIn : '1h'})
        res.status(200).json({id : user._id, token : token, name : user.name})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err : err.message})
    })
  }


}

module.exports = UserController