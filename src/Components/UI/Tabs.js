import React from 'react';
import { Link } from 'react-router-dom';

const tabs = () => {
    return (
      <form>
        <Link to="/login">Log in</Link>
        <Link to="/signin">Sign in</Link>
      </form>
    );
  }

export default tabs;
