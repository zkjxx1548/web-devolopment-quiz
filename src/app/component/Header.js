import React from 'react';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import Store from '../component/home/Store';
import './header.css';
import Order from './order/Order';
import AddProduct from './add/AddProduct';

class Header extends React.Component {
  render() {
    return <div>
      <BrowserRouter>
        <ul className="nav">
          <li>
            <NavLink to="/">商城</NavLink>
          </li>
          <li>
            <NavLink to="/order">订单</NavLink>
          </li>
          <li>
            <NavLink to="/add">添加商品</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Store} />
          <Route path="/order" component={Order} />
          <Route path="/add" component={AddProduct} />

        </Switch>
      </BrowserRouter>
    </div>
  }
}
export default Header; 