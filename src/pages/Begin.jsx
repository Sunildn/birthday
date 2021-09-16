import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { Navbar ,Button} from '../components';
import "../assets/css/landing.css";
import {LoginContext} from "../context"
import Login from "../components/general/LoginModel"

function Begin(props) {
  const  {setLoggedIn,loggedIn} = useContext(LoginContext)
  const  login = useContext(LoginContext)

  return (
    <div className="bg-bliss-blue min-h-screen">
      <Navbar setLoggedIn={setLoggedIn} />
      <h1 className="text-white text-5xl mt-24 font-extrabold">This is going to be some header.</h1>
      <p className="text-white text-xl mt-8 font-medium">This is going to be some sub-header text and some more text.</p>
      <div className="bg-white m-auto mt-10 mb-5 p-4 w-1/3">
        <div className="flex">
          <div className="bg-bliss-pink w-12 h-12 rounded-full flex justify-center items-center text-white font-extrabold mb-3 ml-8">
            01
          </div>
          <p className="text-sm ml-4 text-left">Select a birthday twin</p>
        </div>
        <div className="flex">
          <div className="bg-bliss-pink w-12 h-12 rounded-full flex justify-center items-center text-white font-extrabold mb-3 ml-8">
            02
          </div>
          <p className="text-sm ml-4 text-left">Choose a birthday cake to send</p>
        </div>
        <div className="flex">
          <div className="bg-bliss-pink w-12 h-12 rounded-full flex justify-center items-center text-white font-extrabold ml-8">
            03
          </div>
          <p className="text-sm ml-4 text-left">Place an order and we'll take care of the rest!</p>
        </div>
      </div>
      <Link to="/select-twin">
        <Button 
          type="secondary"
          buttonText="BEGIN"
        />
      </Link>
      {loggedIn ? 
      <>
        <Login login={login}/>
      </>: null
      }
    </div>
  )
};

Begin.propTypes = {};

export default Begin;

