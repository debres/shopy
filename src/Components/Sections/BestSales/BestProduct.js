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
        <div className="productInfo">
          <header>
            <h1>Reebok Track Jacket</h1>
          </header>
          <div className="productPrice">
            <div>raiting</div>
            <p>$100</p>
            <div className="addTocartBtn">
              <img src={addToCart} alt="add to cart" />
              <p>add to card</p>
            </div>
          </div>
        </div>
    </article>
  );
}

export default bestProduct;
