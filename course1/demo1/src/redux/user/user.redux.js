import axios from 'axios';
import { getRedirectPath } from '../../utils';

//action
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = "ERROR_MSG";
//initialState
const  initState = {
    msg: '',
    isAuth: false,
    type: '',
    user: '',
    pwd: '',
    //跳转的路由
    redirectTo:''
};
//reducer
export function user( state = initState , action) {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {...state, redirectTo: getRedirectPath(action.payload), isAuth: true, msg: '', ...action.payload };
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

//统一处理actioncreater 
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
                    dispatch(registerSuccess({user, pwd, type}))
                }
                else {
                    dispatch(errorMsg(res.data.msg))
                }
            }
        )
    }
}