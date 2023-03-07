const router = require('express').Router()
const delvideos = require('../controlers/deleteVideo')

router.delete("/api/deletevideos/:id",delvideos.deletevideos)
module.exports={routerdelete:router}