import React, { Fragment } from 'react';

import RenderChildren from '../UI/RenderChildren';
import Modal from '../UI/Modal';
import Tabs from '../UI/Tabs';

import search from '../../Img/search.svg';
import user from '../../Img/user.svg';
import cart from '../../Img/cart.ico';

const headerUI = () => {
  return (<div>
            <RenderChildren>{({load, showMore})=>(<Fragment>
                  {load && <input  value="search for goods"/>}
                  <img src={search} onClick={showMore} alt="search"/></Fragment>)}
            </RenderChildren>
            <RenderChildren>{({load, showMore})=>(<Fragment>
                  {load && <Tabs />}
                  <img src={user} onClick={showMore} alt="search"/></Fragment>)}
            </RenderChildren>
            <RenderChildren>{({load, showMore})=>(<Fragment>
                  {load && <div>Order dropdown</div>}
                  <img src={cart} onClick={showMore} alt="search"/></Fragment>)}
            </RenderChildren>
          </div>);
}

export default headerUI;
