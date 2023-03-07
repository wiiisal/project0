const router = require('express').Router()
const getvideo = require('../controlers/getVideo')

router.get('/api/getvideo/:id',getvideo.getvideo)
module.exports={routergetone : router}