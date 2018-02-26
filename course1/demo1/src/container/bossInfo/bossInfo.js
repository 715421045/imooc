import React, {Component} from 'react';
import { NavBar, Icon, InputItem, TextareaItem, List, Button, WingBlank} from 'antd-mobile';
import  AvatarSelector from '../../component/avatarSelector/avatarSelector';

class BossInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: '',
            avatar: ''
        };
        this.selectAvatar = this.selectAvatar.bind(this);
    }
    onChange(key, value) {
        this.setState({
            [key]: value
        });
    }
    selectAvatar(avatarName) {
        this.setState({
            avatar: avatarName
        })
    }
    render() {
        return (
            <List>
                <NavBar
                    mode="dark"
                    // leftContent="Back"
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >boss信息完善
                </NavBar>
                <AvatarSelector selectAvatar = {this.selectAvatar }></AvatarSelector>
                <InputItem  onChange={ v => this.onChange('title', v)}>招聘职位</InputItem>
                <InputItem  onChange={ v => this.onChange('company', v)}>公司名称</InputItem>
                <InputItem  onChange={ v => this.onChange('money', v)}>职位薪资</InputItem>
                <TextareaItem
                onChange={ v => this.onChange('desc', v)}
                title="职位要求"
                rows={3}
                autoHeight
                />
               <WingBlank> 
                   <Button type="primary">保存</Button>
               </WingBlank>
            </List>
            )
    }
}
export default BossInfo;