import React from 'react';
import SingleOrder from './SingleOrder';
//import './store.css';

class Order extends React.Component {
  state = {
    orders: [
      {
        name: "可乐1",
        price: 1,
        count: 2,
        unit: "瓶"
      },
      {
        name: "可乐2",
        price: 1,
        count: 3,
        unit: "瓶"
      },
    ]
  }

  render() {
    return <table className="orders">
      <thead>
        <td>名字</td>
        <td>单价</td>
        <td>数量</td>
        <td>单位</td>
        <td>操作</td>
      </thead>
      <tbody>
        {this.state.orders.map(order => <SingleOrder order={order} />)}
      </tbody>
    </table>
  }
}
export default Order; 