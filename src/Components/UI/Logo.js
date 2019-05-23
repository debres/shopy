import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../../Img/logo.ico';

function Logo({ className }) {
  return (
    <div className={className}>
      <Link to="/">
        <h1>sh<img src={logoImg} alt="logo"/>py</h1>
        <span className="logoPhrase">shope any where</span>
      </Link>
    </div>
  );
}

const StyledLogo = styled(Logo)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #34404b;
  a {
    text-decoration: none;
    &:hover {
      h1 {
        text-transform: uppercase;
      }
      span {
        opacity: 1;
      }
    }
  }
`;

export default StyledLogo;
