import React, { Component } from 'react';
import styled from 'styled-components';

function SubscribeForm({ className }) {
  return (
      <form className={className}>
        <h3>news letter</h3>
        <p>join us now to get all news and special offers</p>
        <p>
          <input  type="search" placeholder="type your email here" />
        </p>
      </form>
  )
}

const StyledSubscribeForm = styled(SubscribeForm)`
  width: 1170px;
  min-height: 120px;
  margin: 0 auto 120px auto;
  box-sizing: border-box;
  display:flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff
`;

export default StyledSubscribeForm;
