import React from 'react';
import './home.less';

const Home = () => {
  return (<div className="home">
    <p className="title"><span>在线实用工具</span></p>
    <div className="tools">
      <div className="tool">
        <img src={require("../../../images/calculator.png")} alt="not internet"/>
        <span>计算器</span>
      </div>
      <div className="tool">
        <img src={require("../../../images/timer.png")} alt="not internet"/>
        <span>倒计时器</span>
      </div>
    </div>
  </div>);
};

export default Home;