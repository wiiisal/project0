const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const app = express()
const{routerpost}=require('./router/routerpostvideos')
const {routerget}=require('./router/routergetvideos')
const videos = [
    {
        id: 0,
        poster: '/video/0/poster',
        duration: '3 mins',
        name: 'Sample 1'
    },
    {
        id: 1,
        poster: '/video/1/poster',
        duration: '4 mins',
        name: 'Sample 2'
    },
    {
        id: 2,
        poster: '/video/2/poster',
        duration: '2 mins',
        name: 'Sample 3'
    },
];

// app.get('/video',(req,res)=>{
//     res.sendFile('videos/simple.mp4',{root:__dirname})
// })

app.use(cors());
app.use('/',routerget)
app.use('/',routerpost)
app.get('/videos', (req, res) => res.json(videos))

app.listen(3002,()=>{
    console.log('live stream on port 3002')
})