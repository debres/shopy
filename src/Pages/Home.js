import React from 'react';
import Hero from '../Components/UI/Hero';
import NewArrivals from '../Components/NewArrivals/NewArrivals';
import BestSales from '../Components/BestSales/BestSales';

function Home() {
    return (
      <main>
        <Hero />
        <NewArrivals />
        <BestSales />
      </main>
    )
}

export default Home;
