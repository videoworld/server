const router = require('express').Router()
const controller = require('../controllers/videoController')
const videos = require('../helpers/videos')

router.get('/', controller.allVideos)
router.post('/',  videos.multer.single('video'), videos.sendUploadToGCS, controller.addVideo)
router.get('/:id', controller.getVideo)
router.put('/:id', controller.editVideo)
router.delete('/:id', controller.removeVideo)

module.exports = router