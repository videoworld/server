const Video = require('../models/video')

class Controller {
    static allVideos(req, res) {
        Video.find({})
        .then(videos => {
            res
                .status(200)
                .json(videos)
        })  
        .catch(err => {
            res
                .status(500)
                .json({
                    msg: `Internal server error`,
                    err: err
                })
        })
    }

    static addVideo(req, res) {
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