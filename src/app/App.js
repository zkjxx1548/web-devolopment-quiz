import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import Home from "./component/home/Home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Link to="/">HOME</Link>
            <Link to="/calculator">在线计算器</Link>
            <Link to="/timer">在线倒计时器</Link>
          </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/calculator' component={Calculator}/>
            <Route path='/timer' component={Timer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
