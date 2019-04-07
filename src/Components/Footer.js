import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import RenderChildren from './RenderChildren';
import payImg from '../Img/payment.ico';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #fff;
`;

const FooterFlex = styled.section`
  min-height: 250px;
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLinks = styled.ul`
  height: 120px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
`;

const LinkItem = styled(Link)`
  margin-bottom: 15px;
`;

const DecorCotaier = styled.div`

`;

const fotter = () => {
  return (
    <Footer>
      <FooterFlex>
        <Logo />
        <FooterLinks>
          <LinkItem to='/'><li >about us</li></LinkItem>
          <LinkItem to='/'><li >contact us</li></LinkItem>
          <LinkItem to='/'><li >support</li></LinkItem>
          <LinkItem to='/'><li >about us</li></LinkItem>
          <LinkItem to='/'><li >contact us</li></LinkItem>
          <LinkItem to='/'><li >support</li></LinkItem>
          <LinkItem to='/'><li >about us</li></LinkItem>
          <LinkItem to='/'><li >contact us</li></LinkItem>
          <LinkItem to='/'><li >support</li></LinkItem>
        </FooterLinks>
        <DecorCotaier>
          <h2>Payment Methods</h2>
          <div>
            <RenderChildren>
              {({load, showMore})=>(<Fragment>
              {load && <div>It does work!</div>}
              <img src={payImg} onClick={showMore} alt="search"/></Fragment>)}
            </RenderChildren>
          </div>
        </DecorCotaier>
      </FooterFlex>
     </Footer>
  );
}

export default fotter;
