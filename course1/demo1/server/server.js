const express = require('express');
//处理post
const bodyParser = require('body-parser');
//处理cookie
const cookieParser = require('cookie-parser');
//加载路由模块user
const userRouter = require('./user');

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);

app.listen(9093, function() {
    console.log('Node app start at port 9093')
})