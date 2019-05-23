import React from 'react';
import styled from 'styled-components';
import WithShopyConsumer from '../../Hoc/WithShopyConsumer';
import Headings from '../UI/Headings';
import BestSalesList from './BestSalesList';

function BestSales({ className, context }) {
  const { loading, bestSalesList } = context;
  return (
    <article className={className}>
      <Headings sTitle="best" title="sales" slogan="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      <BestSalesList bestSalesList={bestSalesList} />
    </article>
  )
}

const StyledBestSales = styled(BestSales)`
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export default WithShopyConsumer(StyledBestSales);
