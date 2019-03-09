import React from 'react';

import './widget.css';

const checkboxWidget = (props) => {
  return (
    <div className="widgetContainer">
      <div className="widgetDecorContainer">
        <h1 className="widgetTitle">Sizes</h1>
        <div className="itemDecorContainer">
        <label><input className="iputItem" name="" type="checkbox" />s</label>
        <label><input className="iputItem" name="" type="checkbox" />m</label>
        <label><input className="iputItem" name="" type="checkbox" />l</label>
        <label><input className="iputItem" name="" type="checkbox" />xl</label>
        </div>
      </div>
    </div>
  );
}

export default checkboxWidget;
