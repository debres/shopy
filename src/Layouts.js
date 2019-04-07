import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Components/Header';
import Footer from './Components/Footer';
//import FeaturedSlider from './Components/Slider/FeaturedSlider';
import NewArrivals from './Containers/NewArrivals';
import Adv from './Components/Adv';
import BestSales from './Containers/BestSales';
import Subscribe from './Containers/Subscribe';
import ProductsShow from './Containers/ProductsShow';

const MainContent = styled.main`
  min-height: 650px;
  background-color: #f4f6f8;
`;

const layouts = () => {
  return (<Fragment>
            <MainContent>
              <Header />
              <Route path="/" component={NewArrivals} exact/>
              <Route path="/" component={Adv} exact/>
              <Route path="/" component={BestSales} exact/>
              <Route path="/" component={Subscribe} exact/>
              <Route path="/hotDeals" component={ProductsShow}/>
              <Route path="/products" component={NewArrivals}/>
              <Footer />
            </MainContent>
          </Fragment>);
}

export default layouts;
