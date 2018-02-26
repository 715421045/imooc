import React, {Component} from 'react';
import {Grid, List} from 'antd-mobile';

const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                    .split(',')
                    .map( v => ({
                     icon: require(`../img/${v}.png`),
                     text: v}));
class AvatarSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: ''
        }
    }
    render() {
        const  GridHeader = this.state.icon 
                            ? (<div>
                                <span>已选择头像：</span>
                                <img style={{width:'20px'}} src={this.state.icon}></img>
                            </div>)
                            : (<span>请选择头像</span>)
        return (
            <List renderHeader={ () => GridHeader}>
                <Grid 
                data={avatarList}
                columnNum={5}
                onClick={ v => {
                    this.setState(v)
                    this.props.selectAvatar(v.text);
                }}
                />
            </List>
        )
    }
};
export default AvatarSelector;