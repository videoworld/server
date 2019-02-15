const router = require('express').Router()
const controller = require('../controllers/videoController')
const videos = require('../helpers/videos')
const authentication = require('../middleware/authentication')

router.get('/', controller.allVideos)
router.post('/', authentication, videos.multer.single('video'), videos.sendUploadToGCS, controller.addVideo)

//kalu mau dikasih authorization admin pake kode secret
router.get('/:id', controller.getVideo)
router.put('/:id', controller.editVideo)
router.delete('/:id', controller.removeVideo)

module.exports = router