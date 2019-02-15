const router = require('express').Router()
const videos = require('./videos')
const userController = require('../controllers/userController')

router.use('/videos', videos)
router.use('/login', userController.loginByGoogle)



module.exports = router

