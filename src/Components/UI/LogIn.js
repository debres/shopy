import React from 'react';

import './signInLog.css';

const logIn = () => {
  return (<form className="logInForm">
              <input type="email" placeholder="type your email here" />
              <input type="password" placeholder="type your password here" />
            <div className="formInput">
              <button>submit</button>
              <p>forgot your password</p>
            </div>
          </form>);
}
export default logIn;
