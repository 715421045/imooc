import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
@withRouter
class AuthRoute extends Component {
    componentDidMount() {
        const publicList = ['/login', '/register'];
        const pathname =  this.props.location.pathname;
        if(publicList.indexOf(pathname) > -1) {
            return null;
        }
     //获取用户信息
  axios.get('/user/info')
        .then( res => {
            if( res.status == 200) {
                console.log(res)
                if( res.status.code == 0) {
                   // 有登录信息
                } else {
                    this.props.history.push('/login')
                }
            }
        })
      //是否登录 
   
     //现在的url地址 login是不需要跳转的
     //用户的type  身份是Boss还是牛人
    //用户是否完善信息  （选择头像， 个人简介）
   }
   render() {
       return(
           <div>
               判断跳转
           </div>
       )
   }
  }

  export default AuthRoute;