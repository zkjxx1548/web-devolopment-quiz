import React from 'react';
import Product from './Product';
import './store.css';

class Store extends React.Component {
  state = {
    products: [
      {
        img_url: "../../../images/1.png",
        name: "可乐1",
        price: 1
      },
      {
        img_url: "../../../images/1.png",
        name: "可乐2",
        price: 1
      },
      {
        img_url: "../../../images/1.png",
        name: "可乐3",
        price: 1
      },
      {
        img_url: "../../../images/1.png",
        name: "可乐4",
        price: 1
      },
      {
        img_url: "../../../images/1.png",
        name: "可乐5",
        price: 1
      },
      {
        img_url: "../../../images/1.png",
        name: "可乐6",
        price: 1
      }
    ]
  }

  render() {
    return <div className="products">
      {this.state.products.map(product => <Product product={product} />)} 
    </div>
  }
}
export default Store; 