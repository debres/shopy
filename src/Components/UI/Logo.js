import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../../Img/logo.ico';

function Logo({ className }) {
  return (
    <Link to="/" className={className}>
        <h1>sh<img src={logoImg} alt="logo"/>py</h1>
        <p className="logoPhrase">shope any where</p>
    </Link>
  );
}

const StyledLogo = styled(Logo)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export default StyledLogo;
