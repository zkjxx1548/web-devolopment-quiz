import React, {Component} from 'react';
import './app.less';
import Header from './component/Header';


class App extends Component {
  state = {
    products: []
  };

  render() {
    return (
      <div className="app">
        <Header products={this.state.products}/>
      </div>
    );
  }
}

export default App;
