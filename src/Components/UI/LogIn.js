import React from 'react';

import './signInLog.css';

const logIn = () => {
  return (<section>
            <form className="logInForm">
              <p>
                <label className="visuallyHidden" htmlFor="user-login">log in</label>
                <input className="inputField mailIcon" type="email" placeholder="type your email here" />
              </p>
              <p className="inputField">
                <label className="visuallyHidden" htmlFor="user-login">password</label>
                <input className="inputField passIcon" type="password" placeholder="type your password here" />
              </p>
              <p className="logInHelp">
                <label className="loginCheckbox">
                      <input type="checkbox" className="visuallyHidden" />
                      <span className="checkboxIndicator"></span>
                      remember me for Shopy
                  </label>
                  <span>forgot your password</span>
              </p>
              <button className="submitBtn">log in</button>
              <button className="submitBtn">close</button>
            </form>
          </section>);
}
export default logIn;
