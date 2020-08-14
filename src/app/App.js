import React, {Component} from 'react';
import './app.less';
import Store from './component/home/Store';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
