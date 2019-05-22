import React from 'react';
import styled from 'styled-components';

function IcoBtn({ className, children }) {
    return (
        <button className={className}>{children}</button>
    );
}

const StyledIcoBtn = styled(IcoBtn)`
    border: 0;
    cursor: pointer;
`;

export default StyledIcoBtn;