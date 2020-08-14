import React, {Component} from 'react';
import './app.less';
import Header from './component/Header';
import fetchData from './myFetch.js';

class App extends Component {
  state = {
    products: []
  };

  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }

  // componentDidMount = () => {
  //   fetchData().then((res) => {
  //     this.setState({
  //       products: res
  //     });
  //   });
  // }

}

export default App;
