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
                <h2 className="productTitle">Reebok Track Jacket</h2>
                <p className="productPrice">$100</p>
              <section className="productHover">
                  <p className="productVariations">
                    <span>sizes: s - m - l - xl</span>
                    <span>colors</span>
                  </p>
                  <p className="productBtns">
                      <button onClick={()=>{}}>
                        <span className="icoBtn"></span>
                        share
                      </button>
                      <button onClick={()=>{}}>
                        <span className="icoBtn"></span>
                        addToCard
                      </button>
                      <button onClick={()=>{}}>
                        <span className="icoBtn"></span>
                        like
                      </button>
                  </p>
              </section>
          </article>);
}

export default singleProduct;
