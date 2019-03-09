import React, { Component, Fragment } from 'react';
import Spinner from 'react-spinkit';

import SingleProduct from './SingleProduct';
import RenderChildren from '../../UI/RenderChildren';


export default class NewArrivals extends Component {

  render() {
    const { goods, isReady } = this.props;
    return  (<Fragment>
              <section>
                      {!isReady
                        ? <Spinner name="three-bounce" color="#ff5912"/>
                        : goods.map((good, i) => <SingleProduct key={i} {...good} />)}
                <RenderChildren>{({load, showMore})=>(<Fragment>
                      {load && <Spinner name="three-bounce" color="#ff5912"/>}
                      <div className="loadMore" onClick={showMore}>load more</div></Fragment>)}
                </RenderChildren>
              </section>
            </Fragment>);
  }
}
