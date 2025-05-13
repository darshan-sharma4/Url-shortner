const express = require('express')
const app = express();
const port = 3001;

const connectToMongoDb = require('./connection')
connectToMongoDb('mongodb://localhost:27017/url-Shortner').then(()=>console.log("MogoDb connected"))

const path = require('path')
const staticRoute = require('./router/staticRoute')
const handleUrlRouter = require('./router/router')
const userRouter = require('./router/user')
const cookiParser = require('cookie-parser')

const {checkForAuthentication,restrictToRole}= require('./middleware/authentication')

app.use(cookiParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(checkForAuthentication)


app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));

app.use('/url',restrictToRole(["Normal","Admin"]), handleUrlRouter);
app.use('/',staticRoute);
app.use('/user',userRouter);

app.listen(port,()=>console.log('Server connected')); 