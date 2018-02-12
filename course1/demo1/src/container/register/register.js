import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {List, Radio, InputItem, WhiteSpace, Button, WingBlank} from 'antd-mobile';
import {connect} from 'react-redux';
import {handleRegister} from '../../redux/user/user.redux';
import Logo  from '../../component/logo/logo';

const RadioItem = Radio.RadioItem;
const ListItem = List.Item;

@connect( state => state.user, 
    {handleRegister}
)
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            type: "genius",
            pwd: null,
            repeatpwd: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleChange(key, v) {
        this.setState({
            [key]:v
        });
    }
    handleRegister() {
        console.log("this.props",this.props);
        this.props.handleRegister(this.state);
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <h1>注册页面</h1>
                  { this.props.msg ? <p style={{color: "red", textAlign:"center"}}>{this.props.msg}</p> : null}
                <List>
                    <InputItem placehoder="请输入用户名" onChange={ v => { this.handleChange("user", v) }}>
                        用户
                    </InputItem>
                    <InputItem placehoder="请输入密码" type="password" onChange={ v => { this.handleChange("pwd", v)}}>
                        密码
                    </InputItem>
                    <InputItem placehoder="请再次输入密码" type="password" onChange={ v => { this.handleChange("repeatpwd", v)}}>
                        确认密码
                    </InputItem>
                    <RadioItem checked={this.state.type == "boss" } onChange={ v => { this.handleChange("type", "boss") }}>BOSS</RadioItem>
                    <RadioItem checked={this.state.type == "genius"} onChange={ v => { this.handleChange("type", "genius") }}>牛人</RadioItem>
                    <WhiteSpace/>
                   <WingBlank>
                        <Button type="primary" onClick={this.handleRegister}>注册</Button>
                   </WingBlank>
                </List>
            </div>
        )
    }
}
export default Register;