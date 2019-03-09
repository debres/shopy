import React, { Fragment } from 'react';

const thereColumRow = ({ left, center, right}) => {
  return (<div className="wrapper-col-3">
            <Fragment>{left}</Fragment>
            <Fragment>{center}</Fragment>
            <Fragment>{right}</Fragment>
          </div>);
}

export default thereColumRow;
