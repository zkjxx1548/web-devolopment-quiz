import React from 'react';

class Product extends React.Component {

  render() {
    return <div className="product">
      <img src={require("../../../images/1.jpg")} alt="sorry"/>
      <span>可乐1</span>
      <span>单价：1元/瓶</span>
      <button>+</button>
    </div>
  }
}
export default Product; 