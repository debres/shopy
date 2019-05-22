import React from 'react';
import WithShopyConsumer from '../../Hoc/WithShopyConsumer';
import Headings from '../UI/Headings';
import SingleProductList from './SingleProductList';

function NewArrivals({ context }) {
  const { loading, newArrivals, loadMore } = context;
  return (
    <>
      <Headings></Headings>
      <SingleProductList newArrivals={newArrivals} />
      <button onClick={loadMore}>load more</button>
    </>
  )
}


export default WithShopyConsumer(NewArrivals);
