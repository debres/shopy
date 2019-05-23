import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WithShopyConsumer from '../../Hoc/WithShopyConsumer';
import Logo from '../UI/Logo';
import contacts from '../UI/array/contacts';
import socials from '../UI/array/socials';

function Header({ className, context, children }) {
  return (
    <header className={className}>
      <p>
          {contacts !== null
                    ? contacts.map((contact, index) => {
                      return (
                        <li key={index}>
                          <span>{contact.ico}</span>
                          <span>{contact.contact}</span>
                        </li>
                      )
                    })
                    : <span>contacts</span>}
        {socials  !== null
                  ? socials.map((social, index) => {
                    return (
                      <li key={index}>
                        <Link to={social.url}>{social.ico}</Link>
                      </li>
                    )
                  })
                  : <span>socials</span>}
      </p>
      <div className="bigHeader">
      <Logo />
      <nav>
        <ul>
          <Link to='/'><li>home</li></Link>
          <Link to='/products'><li>products</li></Link>
          <Link to='/hotDeals'><li>hot deals</li></Link>
          <Link to='/about'><li>about</li></Link>
          <Link to='/contact'><li>contact</li></Link>
        </ul>
      </nav>
      <div className="headerBtn">
        {children}
      </div>
      </div>
    </header>
  );
}

const StyledHeader = styled(Header)`
  margin: 0 auto;
  min-height: 180px;
  max-width: 1200px;
  background-color: #fff;
  display:grid;
  p {
    min-height: 60px;
    display: flex;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      a {
        margin-left: 30px;
        text-decoration: none;
        color: #34404b;
        &:hover {
          color: #ff5912;
        }
      }
    }
  }
  .bigHeader {
    min-height: 120px;
    display: flex;
    align-items: center;
    ul {
    width: 450px;
    margin-left: 50px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
      a {
        text-decoration: none;
        color: #34404b;
        &:hover {
          color: #ff5912;
        }
      }
    }
    p {
      margin-left: auto;
    }
  }
`;

export default WithShopyConsumer(StyledHeader);
