import React, { Component } from 'react';
import Slider from 'react-slick';

import SlideAdv from './SlideAdv';
import LogIn from '../UI/LogIn';
import SignIn from '../UI/SignIn';

export default class FeaturedSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="containerPropduct">
        <Slider {...settings}>
          <div className="slideAdv">
            <SlideAdv index={1} />
          </div>
          <div className="slideAdv">
            <form className="container UserInfoForm">
              <LogIn index={2} />
              <SignIn index={2} />
            </form>
          </div>
        </Slider>
      </div>
    );
  }
}
