const router = require('express').Router()
const postvideos = require('../controlers/postvideos')

router.post("/api/postvideos",postvideos.postvideos)
module.exports={routerpost:router}