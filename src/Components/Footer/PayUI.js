import React, { Fragment } from 'react';

import RenderChildren from '../UI/RenderChildren';

import payImg from '../../Img/payment.ico';

const paymentMethods = () => {
  return (<div>
            <h1>Payment Methods</h1>
            <div>
              <RenderChildren>{({load, showMore})=>(<Fragment>
                    {load && <div>It does work!</div>}
                    <img src={payImg} onClick={showMore} alt="search"/></Fragment>)}
              </RenderChildren>
            </div>
          </div>);
}

export default paymentMethods;
