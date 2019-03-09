import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import ProductPage from './Components/Pages/ProductShow';
import LogIn from './Components/UI/LogIn';
import SignIn from './Components/UI/SignIn';


export default class Layouts extends Component {
  render() {
    return (<Fragment>
              <Header />
              <Route path="/" exact
                     component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/hotDeals" component={ProductPage} />
              <Route path="/about" render={() => <div className="container">about</div>} />
              <Route path="/contact" render={() => <div className="container">contact us</div>} />
              <Route path="/login" component={LogIn} />
              <Route path="/signin" component={SignIn} />
              <Footer />
            </Fragment>);
  }
}
