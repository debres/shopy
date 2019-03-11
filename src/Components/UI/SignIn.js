import React from 'react';

import './signInLog.css';

const signIn = () => {
  return (<section>
            <form className="signInForm">
              <p>
              <label className="visuallyHidden" htmlFor="email">enter your email</label>
              <input type="email" placeholder="type your email here" />
              </p>
              <p>
              <label className="visuallyHidden" htmlFor="password">enter your password</label>
              <input type="password" placeholder="type your password here"/>
              </p>
              <p>
              <label className="visuallyHidden" htmlFor="password">confirm your password</label>
              <input type="password" placeholder="confirm your password here"/>
              </p>
              <button className="submitBtn">sign in</button>
              <button className="submitBtn">close</button>
            </form>
          </section>);
}

export default signIn;
