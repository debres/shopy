import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../../Img/hero.jpeg'

function Hero({ className, children }) {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

const StyledHero = styled(Hero)`
  margin-bottom: 120px;
  min-height: 600px;
  background: url(${backgroundImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
