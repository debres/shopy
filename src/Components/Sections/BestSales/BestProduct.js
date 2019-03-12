import React from 'react';

import './BestProduct.css';

import image from '../../../Img/Product_Img.png';
import addToCart from '../../../Img/addToCart.ico';

const bestProduct = good => {
  //const { image, price, tiitle } = good;
  return (
    <article className="bestProduct">
        <figcaption className="productThumbnail">
            <img src={image} alt="randomProductsThambnails" />
        </figcaption>
        <section className="productInfo">
          <header>
            <h1>Reebok Track Jacket</h1>
          </header>
          <p className="productPrice">
            <span>raiting</span>
            <span>$100</span>
            <button className="addTocartBtn" onClick={()=>{}}>
              <img src={addToCart} alt="add to cart" /><span className="icoBtn"></span>
              add to card
            </button>
          </p>
        </section>
    </article>
  );
}

export default bestProduct;
