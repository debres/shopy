import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';

function SingleProductList({ className, children, newArrivalsList}) {
  return (
    <div className={className}>
      {newArrivalsList  !== null
                        ? newArrivalsList.map((product) => {
                            return (
                              <section key={product.id}>
                                <figcaption>
                                  <img src={product.image} alt="randomProductsThumbnail" />
                                </figcaption>
                                <h4>{product.title}</h4>
                                <p>${product.price}</p>
                                <div>
                                  <p>sizes: {product.sizes}</p>
                                  <p>{product.colors}</p>
                                </div>
                                {children !== undefined
                                          ? <div>{children}</div>
                                          : <div><p>pruduct is coming...</p></div>}
                              </section>
                            )
                          })
                        : <p>There is nothing arrived this week...</p>}
    </div>
  );
}

const StyledSingleProductList = styled(SingleProductList)`
  margin-bottom: 80px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  section {
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
  }
  p {
    text-align: center;
  }
`;

export default StyledSingleProductList;
