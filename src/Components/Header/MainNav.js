import React from 'react';
import { Link } from 'react-router-dom';

const mainNav = () => {
  return (<menu>
            <nav>
              <ul className="mainNav">
                <Link to='/'><li className="mainListItem">home</li></Link>
                <Link to='/products'><li className="mainListItem">products</li></Link>
                <Link to='/hotDeals'><li className="mainListItem">hot deals</li></Link>
                <Link to='/about'><li className="mainListItem">about</li></Link>
                <Link to='/contact'><li className="mainListItem">contact</li></Link>
              </ul>
            </nav>
          </menu>);
}

export default mainNav;
