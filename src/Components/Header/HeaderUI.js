import React, { Fragment } from 'react';

import RenderChildren from '../UI/RenderChildren';
//import Modal from '../UI/Modal';
import Tabs from '../UI/Tabs';

const headerUI = () => {
  return (<div>
            <RenderChildren>{({load, showMore})=>(<Fragment>
                  {load && <input  value="search for goods"/>}
                  <button onClick={showMore}>
                    <span className="icoBtn"></span>
                    search
                  </button></Fragment>)}
            </RenderChildren>
            <RenderChildren>{({load, showMore})=>(<Fragment>
                  {load && <Tabs />}
                  <button onClick={showMore}>
                    <span className="icoBtn"></span>
                    user suite
                  </button></Fragment>)}
            </RenderChildren>
            <RenderChildren>{({load, showMore})=>(<Fragment>
                  {load && <div>Order dropdown</div>}
                  <button onClick={showMore}>
                    <span className="icoBtn"></span>
                    cart
                  </button></Fragment>)}
            </RenderChildren>
          </div>);
}

export default headerUI;
