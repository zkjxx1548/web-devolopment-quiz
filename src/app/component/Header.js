import React from 'react';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import Store from '../component/home/Store';

class Header extends React.Component {
  render() {
    return <div>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/">商城</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Store} />

        </Switch>
      </BrowserRouter>
    </div>
  }
}
export default Header; 