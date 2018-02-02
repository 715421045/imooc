const express = require('express');
const app = express();

//连接 并使用imooc这个集合
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo 链接成功！')
})

const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
}));
// 新增数据
// User.create({
//     user: 'lalal',
//     age: 18
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     }
//     else {
//         console.log(err)
//     }
// })

app.get('/',function(req, res){
    res.send('<h1>Hello world</h1>') 
})
app.get('/data',function(req, res){
    //查找所有
    User.find({}, function(err, doc) {
        if (!err) {
                    res.json(doc)
                }
                else {
                    console.log(err)
                }
    })
    // res.json({name:'imooc', type:'IT'})
})
app.listen(9093,function(){
    console.log('Node app start at port 9093')
})