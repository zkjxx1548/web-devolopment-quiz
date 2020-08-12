import React from 'react';
import {Link} from "react-router-dom";
import './calculator.css';


class Calculator extends React.Component {

  state = ({
    num1: '',
    symbol: '',
    num2: '',
    res: 0
  })

  addSymbolCalculator = (event) => {
    this.setState({
      symbol: event.target.value,
      res: this.state.num1 + this.state.symbol
    })
    console.log(this.state.symbol)
    console.log(this.state.res)
  }

  addNum1Calculator = (event) => {
    this.setState({
      num1: (this.state.num1 + event.target.value),
      
    })
    this.setState({
      res: this.state.num1
    })
  }

  addNum2Calculator = (event) => {
    this.setState({
      num2: this.state.num2 + event.target.value,
      res: this.state.res + this.state.num2
    })
  }

  chooseAddNum1OrNum2 = (event) => {
    if (this.state.symbol === '') {
      this.addNum1Calculator(event)
    } else {
      this.addNum2Calculator(event)
    }
  }
  
  // disabledSymbol = () => {
    
  // }

  render() {
    return <div>
      <h3 className="calculator-title">在线计算器</h3>
      <div className="calculator-dis">
        <span className="display">{this.state.res}</span>
        <button disabled={this.state.num1 === '' || this.state.symbol !== ''} className="increament yellow btn1" value="+" onClick={this.addSymbolCalculator} >+</button>
        <button className="decreament yellow btn1" value="-" onClick={this.addSymbolCalculator}>-</button>
        <button className="multiple yellow btn1" value="x" onClick={this.addSymbolCalculator}>x</button>
        <button className="seven orange btn" value='7' onClick={this.chooseAddNum1OrNum2}>7</button>
        <button className="eight orange btn" value='8' onClick={this.chooseAddNum1OrNum2}>8</button>
        <button className="nine orange btn" value='9' onClick={this.chooseAddNum1OrNum2}>9</button>
        <button className="four orange btn" value='4' onClick={this.chooseAddNum1OrNum2}>4</button>
        <button className="five orange btn" value='5' onClick={this.chooseAddNum1OrNum2}>5</button>
        <button className="six orange btn"  value='6' onClick={this.chooseAddNum1OrNum2}>6</button>
        <button className="one orange btn" value='1' onClick={this.chooseAddNum1OrNum2}>1</button>
        <button className="two orange btn" value='2' onClick={this.chooseAddNum1OrNum2}>2</button>
        <button className="three orange btn" value='3' onClick={this.chooseAddNum1OrNum2}>3</button>
        <button className="zero orange btn" value='0' onClick={this.chooseAddNum1OrNum2}>0</button>
        <button className="clear btn">Clear</button>
        <button className="equal btn">=</button>
      </div>
      <Link to="/">回到主页</Link>
    </div>
  }
};

export default Calculator;