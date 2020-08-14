import React from 'react';
import Product from './Product';
import './store.css';

class Store extends React.Component {
  render() {
    return <div className="products">
      <Product /> 
      <Product /> 
      <Product /> 
      <Product />    
      <Product /> 
      <Product /> 
    </div>
  }
}
export default Store; 