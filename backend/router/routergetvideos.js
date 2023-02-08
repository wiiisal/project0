const router = require('express').Router()
const getvideos = require('../controlers/getVideos')

router.get("/api/getvideos",getvideos.getvideos)
module.exports={routerget:router}