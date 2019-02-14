const router = require('express').Router()
const controller = require('../controllers/videoController')

router.get('/', controller.allVideos)
router.post('/', controller.addVideo)
router.get('/:id', controller.getVideo)
router.put('/:id', controller.editVideo)
router.delete('/:id', controller.removeVideo)

module.exports = router