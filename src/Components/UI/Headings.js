import React from 'react';
import styled from 'styled-components';

function Headings({ className, sTitle, title, slogan }) {
    return (
        <hgroup className={className}>
          <h2><span>{sTitle}</span> {title}</h2>
          <h3>{slogan}</h3>
        </hgroup>
    )
}

const StyledHeadings = styled(Headings)`
  margin-bottom: 80px;
  text-align: center;
  h2 {
    margin-bottom: 30px;
    text-transform: uppercase;
    span {
      color: #ff5912;
    }
  h3 {
    margin-bottom: 30px;
  }
}`;

export default StyledHeadings;
