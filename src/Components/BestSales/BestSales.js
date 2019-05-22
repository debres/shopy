import React, { Component } from 'react';
import styled from 'styled-components';

import BestProduct from './BestProduct';

const Sales = styled.section`
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

class BestSales extends Component {
  render() {
    return (
      <Sales>
        <SectionsHeader>
          <h2>best sales</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, at?</p>
        </SectionsHeader>
        <DecorContainer>
          <BestProduct />
          <BestProduct />
          <BestProduct />
        </DecorContainer>
      </Sales>
    )
  }
}

export default BestSales;
