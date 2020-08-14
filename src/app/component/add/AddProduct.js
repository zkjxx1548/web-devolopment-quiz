import React from 'react';
import './addProduct.css'

class AddProduct extends React.Component {
  state = {
    name: "名称",
    price: "价格",
    unit: "单位",
    img_url: "图片"
  }
  render() {
    return <form className="addProduct">
      <h1>添加商品</h1>
      <label htmlFor="name" className="form-lable">
        <h3>{this.state.name}</h3>
        <input id="name" className="form-input" value={this.state.name} type="text"/>
      </label>
      <label htmlFor="price" className="form-lable">
        <h3>{this.state.price}</h3>
        <input id="price" className="form-input" value={this.state.price} type="text"/>
      </label>
      <label htmlFor="unit" className="form-lable">
        <h3>{this.state.unit}</h3>
        <input id="unit" className="form-input" value={this.state.unit} type="text"/>
      </label>
      <label htmlFor="img_url" className="form-lable">
        <h3>{this.state.img_url}</h3>
        <input id="img_url" className="form-input" value={this.state.img_url} type="text"/>
      </label>
      <div className="btn-sumbit">
        <button>提交</button>
      </div>
    </form>
  }
}
export default AddProduct; 