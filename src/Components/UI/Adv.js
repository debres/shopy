import React from 'react';

import fiftyOff from '../../Img/adv.ico';
import addToCart from '../../Img/addToCart.ico';

const  adv = (props) => {
    return (<section className="container advFlex">
              <article className="advLeft">
                <img src={fiftyOff} alt="50off" />
                <div>
                  <h1>full winter kit</h1>
                  <h2>half jacket + skiny trousers + boot leather</h2>
                </div>
                <button className="icoBtn" onClick={()=>{}}>
                  <span className="icoBtnIdicator"></span>
                  120%
                </button>
              </article>
              <div className="advRight">
                  <p>adv area</p>
                  <p>100 x 470</p>
              </div>
            </section>);
  }

export default adv;
