import React, { Component } from 'react';
import styled from 'styled-components';

import SingleProduct from '../Components/SingleProduct';

const Ariivals = styled.section`
  width: 1200px;
  margin: 0 auto 120px auto;
  padding: 0 15px;
  box-sizing: border-box;
`;

const SectionsHeader = styled.hgroup`
  width: 100%;
  margin-bottom: 80px;
  text-align: center;
`;

const DecorContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

const LoadMore = styled.button`
  margin-top: 50px;
  width: 100%;
  min-height: 60px;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

class NewArrivals extends Component {
  render() {
    return (
      <Ariivals>
        <SectionsHeader>
          <h2>new arrivals</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, at?</p>
        </SectionsHeader>
        <DecorContainer>
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        </DecorContainer>
        <LoadMore onClick={()=>{}}>Load more</LoadMore>
      </Ariivals>
    )
  }
}

export default NewArrivals;
