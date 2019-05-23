import React from 'react';
import styled from 'styled-components';
import WithShopyConsumer from '../../Hoc/WithShopyConsumer';
import Headings from '../UI/Headings';
import SingleProductList from './SingleProductList';

function NewArrivals({ className, context }) {
  const { loading, newArrivalsList, loadMore } = context;
  return (
    <article className={className}>
      <Headings sTitle="new" title="arrivals" slogan="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      <SingleProductList newArrivalsList={newArrivalsList} />
      <button onClick={loadMore}>load more</button>
    </article>
  )
}

const StyledNewArrivals = styled(NewArrivals)`
  margin: 0 auto 120px auto;
  max-width:1200px;
  button {
    width: 100%
    height: 60px;
    border: 0;
    background-color: #fff;
  }
`;

export default WithShopyConsumer(StyledNewArrivals);
