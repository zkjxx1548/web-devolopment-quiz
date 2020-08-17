import React from 'react';
import Product from './Product';
import './store.css';

class Store extends React.Component {
  state = {
    productss: []
  }

  render() {
    return <div className="products">
      {this.state.productss.map(product => <Product product={product} />)} 
    </div>
  }

  componentDidMount = () => {
    const URL = 'http://localhost:8080/product';
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      
      }
    }
    fetch(URL, options)
      .then(response => response.json())
      .then(result => {
        this.setState({
          productss: result
        })
      })
      .catch(error => {
        console.error(error);
      });
  }
}
export default Store; 