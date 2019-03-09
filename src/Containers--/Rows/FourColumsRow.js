import React, { Fragment } from '.react';

const fourColumRow = ({ col_1, col_2, col_3, col_4}) => {
  return (<div className="wrapper-col-4">
            <Fragment>{col_1}</Fragment>
            <Fragment>{col_2}</Fragment>
            <Fragment>{col_3}</Fragment>
            <Fragment>{col_4}</Fragment>
          </div>);
}

export default fourColumRow;
