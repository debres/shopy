import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import RenderChildren from './RenderChildren';

import mail from '../Img/mail.ico';
import phone from '../Img/phone.ico';
import facebook from '../Img/facebook.svg';
import twitter from '../Img/twitter.svg';
import google from '../Img/google_+.svg';
import instegram from '../Img/instegram.svg';

const Header = styled.header`
  background-color: #fff;
`;

const HeaderFlex = styled.section`
  width: 1170px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
`;

const ContactInfo = styled(HeaderFlex)`
  min-height: 60px;
`;

const MainHeader = styled(HeaderFlex)`
  min-height: 120px;
`;

const Contacts = styled(HeaderFlex)`
  width: 500px;
  margin: auto 0;
`;

const Socials = styled(HeaderFlex)`
  width: 90px;
  margin: auto 0;
`;

const ContactItem = styled.div`

`;

const MainNav = styled.ul`
  width: 500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const MainNavItem = styled(Link)`

`;

const header = () => {
  return (
    <Header>
      <ContactInfo>
          <Contacts>
            <ContactItem><img src={mail} alt="mail" />info@shopy.com</ContactItem>
            <ContactItem><img src={phone} alt="phone" />996 - 5553 - 453</ContactItem>
          </Contacts>
          <Socials>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={google} alt="google" />
            <img src={instegram} alt="instagram" />
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
        <div>
          <RenderChildren>
            {({load, showMore})=>(<Fragment>{load && <input  value="search for goods"/>}
            <button onClick={showMore}><span className="icoBtn"></span>search</button></Fragment>)}
          </RenderChildren>
          <RenderChildren>
            {({load, showMore})=>(<Fragment>{load && <div />}
            <button onClick={showMore}><span className="icoBtn"></span>user suite</button></Fragment>)}
          </RenderChildren>
          <RenderChildren>{({load, showMore})=>(<Fragment>
            {load && <div>Order dropdown</div>}
            <button onClick={showMore}>
            <span className="icoBtn"></span>
            cart
            </button></Fragment>)}
          </RenderChildren>
        </div>
      </MainHeader>
    </Header>
  );
}

export default header;
