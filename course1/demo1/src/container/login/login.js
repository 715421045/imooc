import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {WingBlank, WhiteSpace, Button, List, InputItem} from 'antd-mobile';
import Logo  from '../../component/logo/logo';
import {handleLogin} from '../../redux/user/user.redux';

const Item = List.Item;

@connect( state => state.user, {handleLogin})
class Login extends Component {
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            user: "",
            pwd: ""
        };
    }
    handleChange(key, v) {
        this.setState({
            [key]:v
        });
    }
    register() {
        this.props.history.push('/register');
    }
    login() {
        console.log(this.props)
        this.props.handleLogin(this.state);
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <WingBlank>
                    <h1>登录页面</h1>
                    <List>
                        <Item>
                            <InputItem placeholder="请输入手机号/邮箱/用户名" onChange={ v => this.handleChange('user', v)}>用户名</InputItem>
                        </Item>
                        <Item>
                            <InputItem placeholder="请输入密码" type="password" onChange={ v => this.handleChange('pwd', v)}>
                                密码
                            </InputItem>
                        </Item>
                    </List>
                    <Button type="primary"  onClick={this.login}>登录</Button>  
                    <WhiteSpace/>              
                    <Button type="primary"  onClick={this.register}>注册</Button>                
                </WingBlank>
            </div>
            
        )
    }
};
export default Login;
