import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../Img/logo.ico';

const ToHome = styled(Link)`
  color: #46505a;
  text-decoration: none;
`;

const Logo = styled.h1`
	color: #34404b;
	font: normal normal 400 30px;
	text-transform: uppercase;
`;

const Slogan = styled.p`
  text-align: center;
`;

const logo = () => {
  return (
    <ToHome to="/">
        <Logo>sh<img src={logoImg} alt="logo"/>py</Logo>
        <Slogan className="logoPhrase">shope any where</Slogan>
    </ToHome>);
}

export default logo;
