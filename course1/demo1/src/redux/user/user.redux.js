import axios from 'axios';
import { getRedirectPath } from '../../utils';

//action
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = "ERROR_MSG";
const LOAD_DATA = "LOAD_DATA";
//initialState
const  initState = {
    msg: '',
    isAuth: false,
    type: '',
    user: '',
    //跳转的路由
    redirectTo:''
};
//reducer
export function user( state = initState , action) {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {...state, redirectTo: getRedirectPath(action.payload), isAuth: true, msg: '', ...action.payload };
        case LOGIN_SUCCESS:
            return {...state, redirectTo: getRedirectPath(action.payload), isAuth: true, msg: '', ...action.payload };
        case LOAD_DATA:
            return {...state, ...action.payload};
        case ERROR_MSG:
             return {...state, isAuth: false, msg:action.msg};
        default:
            return state;
    }
}
//actionCreater
export function registerSuccess(data) {
    return {type: REGISTER_SUCCESS, payload: data};
}
export function errorMsg(msg) {
    return {msg, type: ERROR_MSG};
};
export function loginSuccess(data) {
    console.log("doc", data);
    return {type: LOGIN_SUCCESS, payload: data};
}
export function loadData(userinfo) {
    return {type: LOAD_DATA, payload: userinfo}
}

//注册相关状态操作 
export function handleRegister({user, pwd, repeatpwd, type}) {
    if(!user || !pwd || !repeatpwd) {
        //同步
        return errorMsg("用户名或密码未填写");
    }
    if(pwd !== repeatpwd) {
        //同步
        return errorMsg("两次密码输入不一致")
    }
    //异步请求axios
    return dispatch => {
        axios.post('/user/register', {user, pwd, type})
            .then( res => {
                console.log("res", res);
                if( res.status == 200 && res.data.code === 0) {
                    return dispatch(registerSuccess({user, pwd, type}));
                }
                else {
                   return dispatch(errorMsg(res.data.msg));
                }
            }
        )
    }
}

//登录相关状态操作
export function handleLogin(data) {
    const {user, pwd} = data;
    if (!user || !pwd) {
        return errorMsg('请填写用户名或密码');
    }
   //异步请求axios
   return dispatch => {
    axios.post('/user/login', {user, pwd})
        .then( res => {
            console.log("res", res);
            if( res.status == 200 && res.data.code === 0) {
                dispatch(loginSuccess(res.data.data));
            }
            else {
                dispatch(errorMsg(res.data.msg));
            }
        }
    )
}
} 