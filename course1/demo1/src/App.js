import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {addGun, minusGun, asyncGun} from './index.redux';
// import 'antd-mobile/dist/antd-mobile.css';
// function mapStatetoProps(state) { return {num:state}};
// const actionCreators = {addGun, minusGun, asyncGun};
// App= connect(mapStatetoProps, actionCreators) (App);
@connect(
  state => {num: state},
  {addGun, minusGun, asyncGun}
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        机枪有{this.props.num}
           <Button type="primary" onClick={this.props.addGun} inline>机枪+</Button> 
           <Button type="primary" onClick={this.props.minusGun} inline>机枪-</Button> 
           <Button type="primary" onClick={this.props.asyncGun} inline>异步机枪+</Button> 
        </p>
      </div>
    );
  }
}

export default App;
