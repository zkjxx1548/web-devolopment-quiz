import React from 'react';
import AddEntry from './AddEntry';
//import Product from './Product';
//import './store.css';

class AddProduct extends React.Component {
  state = {
    entrys: [
      {
        chinese: "名称",
        name: "add-name",
      },
      {
        chinese: "价格",
        name: "add-price",
      },
      {
        chinese: "单位",
        name: "add-unit",
      },
      {
        chinese: "图片",
        name: "add-img_url",
      }
    ],
    name: "名称",
    price: "价格",
    unit: "单位",
    img_url: "图片"
  }
  render() {
    return <form className="addProduct">
      <label htmlFor="name">
        <h3>{this.state.name}</h3>
        <input id="name" value={this.state.name} type="text"/>
      </label>
      <label htmlFor="price">
        <h3>{this.state.price}</h3>
        <input id="price" value={this.state.price} type="text"/>
      </label>
      <label htmlFor="unit">
        <h3>{this.state.unit}</h3>
        <input id="unit" value={this.state.unit} type="text"/>
      </label>
      <label htmlFor="img_url">
        <h3>{this.state.img_url}</h3>
        <input id="img_url" value={this.state.img_url} type="text"/>
      </label>
      <button t>提交</button>
    </form>
  }
}
export default AddProduct; 