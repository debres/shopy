import React from 'react';

import share from '../../../Img/share.ico';
import addToCard from '../../../Img/addToCart.ico';
import like from '../../../Img/like.ico';
import thumbnail from '../../../Img/Product_Im.png';

import './SnigleProduct.css';

const singleProduct = good => {
  //const { image, price, size, colors, tiitle } = good;
  return (<article className="singleProduct">
              <figcaption className="productImg">
                <img src={thumbnail} alt="randomProductsThumbnail" />
              </figcaption>
              <hgroup>
                <h1 className="productTitle">Reebok Track Jacket</h1>
                <p className="productPrice">$100</p>
              </hgroup>
              <section className="productHover">
                  <div className="productVariations">
                    <p>sizes: s - m - l - xl</p>
                    <p>colors</p>
                  </div>
                  <div className="productBtns">
                      <img src={share} alt="share"/>
                      <img src={addToCard} alt="addToCard"/>
                      <img src={like} alt="like"/>
                  </div>
              </section>
          </article>);
}

export default singleProduct;
