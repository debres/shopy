import React from 'react';
import { Link } from 'react-router-dom';

const footerlinks = (props) => {
  return (<nav>
            <ul>
              <Link to='/'><li >about us</li></Link>
              <Link to='/'><li >contact us</li></Link>
              <Link to='/'><li >support</li></Link>
            </ul>
          </nav>);
}

export default footerlinks;
