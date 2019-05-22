import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WithShopyConsumer from '../../Hoc/WithShopyConsumer';
import Logo from '../UI/Logo';

function Header({ className, context, children }) {
  const { contacts, socials } = context;
  console.log("this is the contacts", contacts, 'This is the socials', socials);
  return (
    <header className={className}>
      <section>
        <>
          {contacts !== null
                    ? contacts.map((contact) => {
                      return (
                        <p key={contact.index}>
                          <img src={contact.image} alt/>
                          <span>{contact.text}</span>
                        </p>
                      )
                    })
                    : <p>contacts</p>}
        </>
        <>
        {socials  !== null
                  ? socials.map((social) => {
                    return (
                      <div key={social.index}>
                        <img src={social.image}/>
                      </div>
                    )
                  })
                  : <p>socials</p>}
        </>
      </section>
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
      <div>
        {children}
      </div>
    </header>
  );
}

const StyledHeader = styled(Header)`
  margin: 0 auto;
  max-width: 1200px;
  background-color: #fff;
  display:grid;
  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export default WithShopyConsumer(StyledHeader);
