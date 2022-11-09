import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ logOutCallback }) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/protected">Protected</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <button onClick={logOutCallback}>Log out</button>
      </li>
    </ul>
  );
};

export default Navigation;