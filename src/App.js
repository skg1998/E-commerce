import React, { Component } from 'react';
import {Switch ,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Page/Home';
import Navbar from './component/Navbar';
import Default from './component/Default';
import ProductDetails from './component/ProductDetails';
import ProductList from './component/ProductList';
import Cart from './component/Cart/Cart';
import Modal from './component/Modal';

export default class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/productdetails" component={ProductDetails} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}

