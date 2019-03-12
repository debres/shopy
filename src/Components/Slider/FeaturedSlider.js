import React, { Component } from 'react';
import Slider from 'react-slick';

import SlideAdv from './SlideAdv';

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
            <SlideAdv index={2} />
          </div>
        </Slider>
      </div>
    );
  }
}
