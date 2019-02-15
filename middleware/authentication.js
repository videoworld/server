const jwt = require('jsonwebtoken')

function authentication (req, res, next) {
  // console.log(req.headers.token)
  try {
    const decode = jwt.verify(req.headers.token, process.env.SECRET_JWT)
    req.userAuthenthic = decode
    console.log('==========')
    next()
  } catch (err) {
    console.log('========', err)
    res.status(401).json({message :'Unauthorized'})
  }
}

module.exports = authentication
