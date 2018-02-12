const express = require('express');
const model = require('./model');
//密码加密
const utility = require('utility');
const User = model.getModule('user');
const Router = express.Router();
Router.get('/list', (req, res) => {
    User.find({}, (err, doc) => {
        return res.json(doc);
    })
});
Router.post('/register', (req, res) => {
    const {user, pwd, type} = req.body;
    User.findOne({user}, (err, doc) => {
        if(doc) {
            return res.json({code:1, msg:"用户名已存在"})
        } else {
            User.create({user, pwd: md5Pwd(pwd), type}, (e, d) => {
                if(e) {
                    return res.json({code:1, msg: "后端出错"});
                } else {
                    return res.json({code:0})
                }
            })
        }

    })
})
Router.get('/info', (req, res) => {
    return res.json({code:1});
});
// Router.post('/info', (req, res) => {
//     console.log("req", req)
//     return res.json({code:2, req})
// });

//密码简单加密函数
function md5Pwd(pwd) {
    const salt = 'sfnkjdsg_wqr917463265%……%&*197GFYAGK@4362988723em￥……%%&';
    return utility.md5(utility.md5(pwd + salt));
};
module.exports = Router;