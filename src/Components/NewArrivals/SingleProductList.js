import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import thumbnail from '../../Img/Product_Im.png';

function SingleProductList({ className, children, newArrivals}) {
  const newArrivalsList = newArrivals.map((product) => {
    return (
      <article>
      <figcaption>
        <img src={thumbnail} alt="randomProductsThumbnail" />
      </figcaption>
        <h3>Reebok Track Jacket</h3>
        <p>$100</p>
      <div>
        <p>sizes: s - m - l - xl</p>
        <p>colors</p>
      </div>
    </article>
    )
  })
  return (
    <section className={className}>
      {newArrivalsList}
    </section>
  );
}

const StyledSingleProductList = styled(SingleProductList)`
  position: relative;
  width: 270px;
  height: 365px;
  margin-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font: normal normal 700 18px 'Roboto', sans-serif;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  figcaption {
    margin: 30px auto;
   img {
    display: block;
    max-width: 100%;
    width: 100%;
    &:hover {
      max-width: 50%;
      margin: 0 auto;
    }
  }
  }
`;

export default StyledSingleProductList;


