import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WithShopyConsumer from '../../Hoc/WithShopyConsumer';
import Logo from '../UI/Logo';

function Footer({className}) {
  return (
    <footer className={className}>
      <Logo />
      <ul>
        <Link to='/'><li >about us</li></Link>
        <Link to='/'><li >contact us</li></Link>
        <Link to='/'><li >support</li></Link>
        <Link to='/'><li >about us</li></Link>
        <Link to='/'><li >contact us</li></Link>
        <Link to='/'><li >support</li></Link>
        <Link to='/'><li >about us</li></Link>
        <Link to='/'><li >contact us</li></Link>
        <Link to='/'><li >support</li></Link>
      </ul>
      <div>
        <h2>Payment Methods</h2>
      </div>
    </footer>
  );
}

const StyledFooter = styled(Footer)`
  margin: 0 auto;
  max-width: 1200px;
  background-color: #fff;
  display:grid;
`;

export default WithShopyConsumer(StyledFooter);
