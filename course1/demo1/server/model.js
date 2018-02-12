//连接 并使用imooc这个集合
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/imooc-model';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo 链接成功！')
})

const models = {
    user: {
        user: {type: String, reqiure: true},
        pwd: {type: String, reqiure: true},
        type: {type: String, reqiure: true},
        //头像
        avatar: {type: String},
        //个人简介或职位简介
        desc: {type: String},
        //职位名
        title: {type: String},
        //如果是BOSS，还有两个
        //money
        money: {type: String},
        //公司简介
        company: {type: String}
    },
    chat: {

    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}
module.exports = {
    getModule:function(name){
        return mongoose.model(name);
    }
}

// const User = mongoose.model('user', new mongoose.Schema({
//     user: { type: String, require: true },
//     age: { type: Number, require: true }
// }));
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
