import React from 'react';
import './order.css';

class SingleOrder extends React.Component {

  render() {
    return <tr className="table-tr">
      <td>{this.props.order.name}</td>
      <td>{this.props.order.price}</td>
      <td>{this.props.order.count}</td>
      <td>{this.props.order.unit}</td>
      <td>
        <button>删除</button>
      </td>
    </tr>
  }
}
export default SingleOrder; 