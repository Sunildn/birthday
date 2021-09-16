import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// import FullLogo from '../../assets/blissfairy-full-logo.png';
// import IconLogo from '../../assets/blissfairy-icon-blue.png';

const Navbar = ({setLoggedIn}) => {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md px-36">
      {/* <div>
        <img src={FullLogo} alt="" className="w-40 -my-3" />
      </div> */}
      <p className="text-md text-bliss-blue font-extrabold">Birthday Project</p>
      <ul className="flex">
        <li><Link to="/about" className="text-bliss-blue">Our Mission</Link></li>
        <li><Button className="rounded-md bg-bliss-blue text-white px-5 ml-12 font-extrabold p-2 text-sm" onClick={()=>{setLoggedIn(true)}}>Provider Login</Button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
