import React from 'react';
import {Link} from "react-router-dom";


class Calculator extends React.Component {
  render() {
    return <div>
      <h3>在线计算器</h3>
      <div className="calculator-dis">
        <span className="display">555</span>
        <button className="seven"></button>
        <button className="eight"></button>
        <button className="nine"></button>
        <button className="four"></button>
        <button className="five"></button>
        <button className="six"></button>
        <button className="one"></button>
        <button className="two"></button>
        <button className="three"></button>
        <button className="zero"></button>
        <button className="clear"></button>
        <button className="equal"></button>
      </div>
      <Link to="/">回到主页</Link>
    </div>
  }
};

export default Calculator;