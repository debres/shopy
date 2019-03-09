import React from 'react';
import Aux from 'react-aux';

import FeaturedSlider from '../Slider/FeaturedSlider';
import Subscribe from '../UI/Subscribe';
import Adv from '../UI/Adv';
import SingleProduct from '../Sections/NewArrivals/SingleProduct';
import BestProduct from '../Sections/BestSales/BestProduct';

const homePage = () => {
  return  <Aux>
           <FeaturedSlider />
           <main>
             <SingleProduct />
             <SingleProduct />
             <SingleProduct />
             <SingleProduct />
             <Adv />
             <BestProduct />
             <Subscribe />
           </main>
          </Aux>;
};

export default homePage;
