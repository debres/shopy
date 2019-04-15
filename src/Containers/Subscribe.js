import React, { Component } from 'react';
import styled from 'styled-components';

const SubscribeForm = styled.form`
  width: 1170px;
  min-height: 120px;
  margin: 0 auto 120px auto;
  box-sizing: border-box;
  display:flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff
`;

class Subscribe extends Component {
  render() {
    return (
        <SubscribeForm>
          <h2 className="">news letter</h2>
          <p>join us now to get all news and special offers</p>
          <p>
            <input className="inputField" type="search" onChange={()=>{}} placeholder="type your email here" />
            <button className="submitBtn" onClick={()=>{}}>join us</button>
          </p>
        </SubscribeForm>
    )
  }
}

export default Subscribe;
