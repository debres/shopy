import React from 'react';

import Logo from '../UI/Logo';
import FooterLinks from './FooterLinks';
import PaymentMethods from './PayUI';

const fotter = () => {
  return (<footer className="container footerFlex">
            <Logo />
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
            <PaymentMethods />
         </footer>);
}

export default fotter;
