import React, { Component } from 'react';
import './App.css';
import Layout from './components/common/Layout/Layout';
import Categories from './components/Category/Categories';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
              <p>Welcome ony FoodOrdering</p>
              <Categories/>
              <div>Show items</div>
          </Layout>
      </div>
    );
  }
}

export default App;
