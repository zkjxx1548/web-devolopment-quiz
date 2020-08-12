import React from 'react';
import './home.less';
import { Link } from 'react-router-dom';

const Home = () => {
  return (<div className="home">
    <p className="title"><span>在线实用工具</span></p>
    <div className="tools">
      <div className="tool">
        <img src={require("../../../images/calculator.png")} alt="not internet"/>
        <Link to="/calculator">计算器</Link>
      </div>
      <div className="tool">
        <img src={require("../../../images/timer.png")} alt="not internet"/>
        <Link to="/timer">倒计时器</Link>
      </div>
    </div>
  </div>);
};

export default Home;