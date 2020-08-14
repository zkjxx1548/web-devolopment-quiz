import React from 'react';
import Product from './Product';

class Store extends React.Component {
  render() {
    return <div>
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