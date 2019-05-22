import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import IcoBtn from './UI/IcoBtn';
import Footer from './Footer/Footer';
import Home from '../Pages/Home';
import ProductsShow from './PropductShow/ProductsShow';

function Layouts() {
  return (
    <>
        <Header>
          <IcoBtn>search</IcoBtn>
          <IcoBtn>login</IcoBtn>
          <IcoBtn>card</IcoBtn>
        </Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hotDeals" component={ProductsShow} />
        </Switch>
        <Footer />
    </>
  );
}

export default Layouts;
