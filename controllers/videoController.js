const Video = require('../models/video')

class Controller {
    static allVideos(req, res) {

    }

    static addVideo(req, res) {
        console.log('===')
        let video = ''
        if(req.file) {
            video = req.file.cloudStoragePublicUrl
        }
        Video.create({
            title: req.body.title,
            description: req.body.description,
            videoUrl: video
        })
        .then(data => {
            res.status(200).json(data)
          })
          .catch(err => {

            res.status(500).json(err)
          })
    }

    static getVideo(req, res) {

    }

    static editVideo(req, res) {

    }

    static removeVideo(req, res) {

    }
}

module.exports = Controller