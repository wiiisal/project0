const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const app = express()
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const { RegisterUser, UserLogin, LoginStatus, UserLogout } = require('./controlers/user')
const {routerpost}=require('./router/routerpostvideos')
const {routerget}=require('./router/routergetvideos')
const {routerdelete}=require('./router/routerdelvideos')
const {routergetone}=require('./router/routergetvideo')

app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:false,
    optionsSuccessStatus:200,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "wissal",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 7 * 24 * 60 * 60,
    },
  })
);

app.use('/',routerget)
app.use('/',routerpost)
app.use('/',routerdelete)
app.use('/',routergetone)

app.post('/register', RegisterUser);
app.post('/login', UserLogin);
app.get('/session', LoginStatus);
app.post('/logout', UserLogout)



app.listen(3002,()=>{
    console.log('live stream on port 3002')
})