import React from 'react';
import './product.css';

class Product extends React.Component {

  render() {
    return <div className="product">
      <img src={require("../../../images/1.png")} alt="sorry"/>
      <span>可乐1</span>
      <span>单价：1元/瓶</span>
      <button>+</button>
    </div>
  }
}
export default Product; 