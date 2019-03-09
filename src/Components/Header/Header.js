import React from 'react';

import ContactInfo from './ContactInfo';
import Logo from '../UI/Logo';
import MainNav from './MainNav';
import HeaderUI from './HeaderUI';

const header = () => {
  return (<header className="container">
            <ContactInfo />
            <div className="headerFlex bigHeader">
              <Logo />
              <MainNav />
              <HeaderUI />
            </div>
          </header>);
}

export default header;
