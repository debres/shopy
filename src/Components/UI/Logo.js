import React from 'react';

import logoImg from '../../Img/logo.ico';

const logo = () => {
  return (<div className="logo">
            <span>sh<img src={logoImg} alt="logo"/>py</span>
            <p className="logoPhrase">shope any where</p>
          </div>);
}

export default logo;
