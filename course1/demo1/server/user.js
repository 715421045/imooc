const express = require('express');
const model = require('./model');
//密码加密
const utility = require('utility');
const User = model.getModule('user');
const Router = express.Router();
//过滤
const _filter = {__v: 0, pwd: 0};
Router.get('/list', (req, res) => {
    // User.remove({},()=>{});
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
                    res.cookie('userid', d._id);
                    console.log("registerdoc", d)
                    return res.json({code:0, data:d});
                }
            })
            //_id不能保存需要改写，改写后
            // const  userModel = new User({user, type, pwd: md5Pwd(pwd)});
            // userModel.save(function(e, d){
            //     if(e) {
            //                 return res.json({code:1, msg: "后端出错"});
            //         } else {
            //             const {user, type, _id} = d ;
            //             res.cookie('userid', _id);
            //             console.log("registerdoc", d)
            //             return res.json({code:0, data: {user, type, _id}});
            //         }
            // }) 
        }

    })
})
Router.post('/login', (req, res) => {
    const {user, pwd} = req.body;
    //返回对象不包含type
    User.findOne({user, pwd: md5Pwd(pwd)}, _filter, (err, doc) => {
        if(!doc) {
            return res.json({code:1, msg:"用户名或密码错误"});
        } else {
            //以唯一标示量_id作为设置cookie的参考量
            res.cookie('userid', doc._id);
            console.log("logindoc", doc)
            return res.json({code:0, data:doc});
        };
    })

 })
Router.get('/info', (req, res) => {
    //注意是cookies 不是cookie
    // User.remove({},()=>{});
    const {userid} = req.cookies;
    if (!userid) {
        return res.json({code:1});
    } else {
        User.findOne({_id: userid}, (err, doc) => {
            if (err) {
                return res.json({code: 1, msg:"后端出错"})
            }
            if (doc) {
                return res.json({code: 0, data: doc})
;            }
        })
    }
});

//密码简单加密函数
function md5Pwd(pwd) {
    const salt = 'sfnkjdsg_wqr917463265%……%&*197GFYAGK@4362988723em￥……%%&';
    return utility.md5(utility.md5(pwd + salt));
};
module.exports = Router;