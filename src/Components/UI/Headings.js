import React from 'react';
import styled from 'styled-components';

function Headings({ className, title, slogan }) {
    return (
        <hgroup className={className}>
            <h2>{title}</h2>
            <h3>{slogan}</h3>
        </hgroup>
    )
}

const StyledHeadings = styled(Headings)`

`;

export default StyledHeadings;