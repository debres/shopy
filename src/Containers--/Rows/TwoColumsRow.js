import React, { Fragment } from 'react';

const twoColumsRow = ({left, right}) => {
  return (<div className="wrapper-col-2">
            <Fragment>{left}</Fragment>
            <Fragment>{right}</Fragment>
          </div>);
}

export default twoColumsRow;
