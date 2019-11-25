import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Carousel from './components/layout/Carousel'
import Shelves from './components/categories/Shelves'
import CategoriesNav from './components/layout/CategoriesNav'
import Footer from './components/layout/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <Navbar />


          <div className="main">
            {/* <Carousel />
            <CategoriesNav /> */}
            <Shelves />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
