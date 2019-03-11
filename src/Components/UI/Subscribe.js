import React from 'react';

import './signInLog.css';

const subscribe = () => {
  return (
    <section className="container">
      <form className="subscribeForm">
        <hgroup>
          <h2 className="">news letter</h2>
          <h3>join us now to get all news and special offers</h3>
        </hgroup>
        <p>
          <input className="inputField" type="search" onChange={()=>{}} placeholder="type your email here" />
          <button className="submitBtn" onSubmit={()=>{}}>join us</button>
        </p>
      </form>
    </section>
  );
}

export default subscribe;
