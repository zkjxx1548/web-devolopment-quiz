import React from 'react';
import {Link} from "react-router-dom";
import './calculator.css';


class Calculator extends React.Component {
  render() {
    return <div>
      <h3 className="calculator-title">在线计算器</h3>
      <div className="calculator-dis">
        <span className="display">555</span>
        <button className="increament yellow btn1">+</button>
        <button className="decreament yellow btn1">-</button>
        <button className="multiple yellow btn1">x</button>
        <button className="seven orange btn">7</button>
        <button className="eight orange btn">8</button>
        <button className="nine orange btn">9</button>
        <button className="four orange btn">4</button>
        <button className="five orange btn">5</button>
        <button className="six orange btn">6</button>
        <button className="one orange btn">1</button>
        <button className="two orange btn">2</button>
        <button className="three orange btn">3</button>
        <button className="zero orange btn">0</button>
        <button className="clear btn">Clear</button>
        <button className="equal btn">=</button>
      </div>
      <Link to="/">回到主页</Link>
    </div>
  }
};

export default Calculator;