import React from 'react';

import './widget.css';

const checkboxWidget = (props) => {
  return (
    <section className="widgetContainer">
      <div className="widgetDecorContainer">
        <h1 className="widgetTitle">Sizes</h1>
        <div className="itemDecorContainer">
          <p className="iputItem">
            <label className="widgetCheckbox">
                    <input className="visuallyHidden" name="" type="checkbox" />
                    <span className="checkboxIndicator"></span>
                    s
            </label>
          </p>
          <p className="iputItem">
            <label className="widgetCheckbox">
                    <input className="visuallyHidden" name="" type="checkbox" />
                    <span className="checkboxIndicator"></span>
                    s
            </label>
          </p>
          <p className="iputItem">
            <label className="widgetCheckbox">
                    <input className="visuallyHidden" name="" type="checkbox" />
                    <span className="checkboxIndicator"></span>
                    s
            </label>
          </p>
          <p className="iputItem">
            <label className="widgetCheckbox">
                    <input className="visuallyHidden" name="" type="checkbox" />
                    <span className="checkboxIndicator"></span>
                    s
            </label>
          </p>
        </div>
      </div>
    </section>
  );
}

export default checkboxWidget;
