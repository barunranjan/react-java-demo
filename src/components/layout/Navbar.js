import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <div className='navbar bg-primary'>
      <h2>{title}</h2>
      <ul>
        <li>
          <Link to='/'>Registartion Form</Link>
          <Link to='/user-data'>User List</Link>
          {/* <Link to='/upload-image'>Upload Image</Link> */}
          {/* <Link to='/email'>Email</Link> */}
        </li>
      </ul>
    </div>
  );
};
Navbar.defaultProps = {
  title: ' React-Java App',
};
export default Navbar;
