import React, {Component} from 'react';
import Logo  from '../../component/logo/logo';
import {WingBlank, WhiteSpace, Button, List, InputItem} from 'antd-mobile';

const Item = List.Item;

class Login extends Component {
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
    }
    register(){
        this.props.history.push('/register');
    }
    render() {
        return (
            <div>
                <Logo/>
                <WingBlank>
                    <h1>登录页面</h1>
                    <List>
                        <Item>
                            <InputItem placeholder="请输入手机号/邮箱/用户名">用户名</InputItem>
                        </Item>
                        <Item>
                            <InputItem placeholder="请输入密码" type="password">
                                密码
                            </InputItem>
                        </Item>
                    </List>
                    <Button type="primary">登录</Button>  
                    <WhiteSpace/>              
                    <Button type="primary"  onClick={this.register}>注册</Button>                
                </WingBlank>
            </div>
            
        )
    }
};
export default Login;
