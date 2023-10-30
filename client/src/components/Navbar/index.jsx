import React from 'react';
import { Link } from 'react-router-dom';  

const Navbar = () => {
  return (
    <div>
        <Link to="/">Camps</Link>
        <Link to="/camps/new">Make a New Camp</Link>
    </div>
  );
};

export default Navbar;
