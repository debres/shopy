import React from 'react';
import addToCart from '../../Img/addToCart.ico';

const  slideAdv = () => {
    return (<section className="container">
              <article className="slideArticleAdv">
                <hgroup>
                  <h1>full winter kit</h1>
                  <h2>half jacket + skiny trousers + boot leather</h2>
                </hgroup>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                <div className="advDecorContainer">
                  <p>Price: 120$</p>
                  <div className="orderBtn">
                    <img src={addToCart} alt="order now" />
                    <p>order now</p>
                  </div>
                </div>
              </article>
            </section>);
          }

export default slideAdv;
