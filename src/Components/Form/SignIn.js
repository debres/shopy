import React from 'react';

import './signInLog.css';

function SignIn() {
  return (<section>
            <h2>Log in please</h2>
            <p>Enter your email and password</p>
            <form className="signInForm">
              <p className="inputField">
                <label className="visuallyHidden" htmlFor="user-login">log in</label>
                <input className="mailIcon" type="email" placeholder="type your email here" />
              </p>
              <p className="inputField">
                <label className="visuallyHidden" htmlFor="user-login">password</label>
                <input className="passIcon" type="password" placeholder="type your password here" />
              </p>
              <p className="logInHelp">
                <label className="loginCheckbox">
                      <input type="checkbox" className="visuallyHidden" />
                      <span className="checkboxIndicator"></span>
                      remember me for Shopy
                  </label>
                  <span>forgot your password</span>
              </p>
              <button className="submitBtn" onClick={()=>{}}>log in</button>
              <button onClick={()=>{}}>close</button>
            </form>
          </section>);
}
export default signIn;
