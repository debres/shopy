import React from 'react';

const signIn = () => {
  return (<div className="signInForm">
            <label htmlFor="email">enter your email</label>
            <input type="email" placeholder="...@mail" />
            <label htmlFor="password">enter your password</label>
            <input type="password" />
            <label htmlFor="password">confirm your password</label>
            <input type="password" />
            <button>submit</button>
          </div>);
}

export default signIn;
