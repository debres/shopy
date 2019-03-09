import React, { Component, Fragment } from 'react';
import Spinner from 'react-spinkit';

import BestProduct from './BestProduct';

export default class BestSales extends Component {

  /*componentWillMount() {
    const { setGoods } = this.props;
    axios.get('/goods.json').then(({ data }) => {
      setGoods(data);
    });
  }*/

  render() {
    const { goods, isReady } = this.props;
    return  (<Fragment>
                <section>
                      {!isReady
                        ? <Spinner name="three-bounce" color="#ff5912"/>
                        : goods.map((good, i) => <BestProduct key={i} {...good} />)}
                </section>
            </Fragment>);
  }
}
