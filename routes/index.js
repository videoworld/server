const router = require('express').Router()
const videos = require('./videos')
const images = require('../helpers/videos')

router.use('/videos', videos)
// router.post('/upload',
//   images.multer.single('video'), 
//   images.sendUploadToGCS,
//   (req, res) => {
//     console.log(res)
//     res.send({
//       status: 200,
//       message: 'Your file is successfully uploaded',
//       link: req.file.cloudStoragePublicUrl
//     })
//   })


module.exports = router

