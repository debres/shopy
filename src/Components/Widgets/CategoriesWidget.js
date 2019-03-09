import React from 'react';

import './widget.css';

const categoriesWidget = (props) => {
  return (
    <div class="widgetContainer">
      <div className="widgetDecorContainer">
      <h1 className="widgetTitle">categories</h1>
          <ul className="itemDecorContainer">
            <li className="iputItem">man</li>
            <li className="iputItem">women</li>
            <li className="iputItem">childrens</li>
            <li className="iputItem">hot deals</li>
          </ul>
      </div>
    </div>
  );
}

export default categoriesWidget;
