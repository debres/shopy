import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

import mail from '../Img/mail.ico';
import phone from '../Img/phone.ico';
import facebook from '../Img/facebook.svg';
import twitter from '../Img/twitter.svg';
import google from '../Img/google_+.svg';
import instegram from '../Img/instegram.svg';

const Header = styled.header`
  background-color: #fff;
`;

const FlexContainer = styled.section`
  width: 1170px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
`;

const ContactInfo = styled(FlexContainer)`
  min-height: 60px;
`;

const MainHeader = styled(FlexContainer)`
  min-height: 120px;
`;

const FlexUl = styled.ul`
  display: flex;
  flex-flow: row npwrap;
  list-style: none;
`;

const Contacts = styled(FlexUl)`
  width: 500px;
  margin: auto 0;
`;

const Socials = styled(FlexUl)`
  width: 90px;
  margin: auto 0;
`;

const MainNav = styled.ul`
  width: 500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const MainNavItem = styled(Link)`
  display: block;
  color: #46505a;
  text-decoration: none;
  text-transform: uppercase;
  &:focus, &:hover, &:link, &:active {
    color: #ff5912;
  }
  > li {

  }
`;

const HeaderBtn = styled(FlexUl)`

`;

const header = () => {
  return (
    <Header>
      <ContactInfo>
        <Contacts>
          <li><img src={mail} alt="mail" />info@shopy.com</li>
          <li><img src={phone} alt="phone" />996 - 5553 - 453</li>
        </Contacts>
        <Socials>
          <li><img src={facebook} alt="facebook" /></li>
          <li><img src={twitter} alt="twitter" /></li>
          <li><img src={google} alt="google" /></li>
          <li><img src={instegram} alt="instagram" /></li>
        </Socials>
      </ContactInfo>
      <MainHeader>
        <Logo />
        <menu>
          <nav>
            <MainNav>
              <MainNavItem to='/'><li>home</li></MainNavItem>
              <MainNavItem to='/products'><li>products</li></MainNavItem>
              <MainNavItem to='/hotDeals'><li>hot deals</li></MainNavItem>
              <MainNavItem to='/about'><li>about</li></MainNavItem>
              <MainNavItem to='/contact'><li>contact</li></MainNavItem>
            </MainNav>
          </nav>
        </menu>
        <HeaderBtn>
          <li><button onClick={()=>{}}><span className="icoBtn"></span>search</button></li>
          <li><button onClick={()=>{}}><span className="icoBtn"></span>user suite</button></li>
          <li><button onClick={()=>{}}><span className="icoBtn"></span>cart</button></li>
        </HeaderBtn>
      </MainHeader>
    </Header>
  );
}

export default header;
