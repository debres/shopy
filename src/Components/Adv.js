import React, { Component } from 'react';
import styled from 'styled-components';
import fiftyOff from '../Img/adv.ico';

const AdvSection = styled.section`
  width: 1170px;
  margin: 0 auto 120px auto;
  display: flex;
  justify-content: space-between;
`;

const Baner = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Left = styled(Baner)`
  width: 670px;
  min-height: 100px;
`;

const Right = styled(Baner)`
  width: 470px;
  height: 100px;
`;

class Adv extends Component {
  render() {
    return (
      <AdvSection>
        <Left>
          <img src={fiftyOff} alt="50off" />
          <hgroup>
            <h2>full winter kit</h2>
            <h3>half jacket + skiny trousers + boot leather</h3>
          </hgroup>
          <button className="icoBtn" onClick={()=>{}}>
            <span className="icoBtnIdicator"></span>
            120%
          </button>
        </Left>
        <Right className="advRight">
          <hgroup>
            <h2>adv area</h2>
            <h3>100 x 470</h3>
          </hgroup>
        </Right>
      </AdvSection>
    )
  }
}

export default Adv;
