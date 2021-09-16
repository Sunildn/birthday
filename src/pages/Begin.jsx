import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Navbar,  } from "../components";
import "../styles/landing.css";
import { LoginContext } from "../context";
import Login from "../components/general/LoginModel";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Begin(props) {
  const { setLoggedIn, loggedIn } = useContext(LoginContext);
  const login = useContext(LoginContext);

  return (
    <div className="bg-bliss-blue min-h-screen">
      <Navbar setLoggedIn={setLoggedIn} />
      <h1 className="text-white text-5xl mt-24 font-extrabold">
        This is going to be some header.
      </h1>
      <p className="text-white text-xl mt-8 font-medium">
        This is going to be some sub-header text and some more text.
      </p>
      {/* <div className="bg-white m-auto mt-10 mb-5 p-4 w-1/3">
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
          <div className="bg-bliss-pink w-12 h-12 rounded-full flex justify-center items-center text-white font-extrabold ml-8 ml-8">
            03
          </div>
          <p className="text-sm ml-4 text-left">Place an order and we'll take care of the rest!</p>
        </div>
      </div> */}
      <div className="select-bar" style={{ backgroundColor: "white" }}>
        <div className="container ">
          <div className="row">
            <div className="row description">
              <div className=" col-md-3 col-sm-12 numbers">
                <div className="bg-bliss-pink w-12 h-12 rounded-full flex justify-center items-center text-white font-extrabold mb-3 ml-8">
                  01
                </div>
              </div>
              <div className="col-md-9 col-sm-12 text">
                <p className="text-sm ml-4 text-left">Select a birthday twin</p>
              </div>
            </div>
            <div className="row description">
              <div className=" col-md-3 col-sm-12 numbers">
                <div className="bg-bliss-pink w-12 h-12 rounded-full flex justify-center items-center text-white font-extrabold mb-3 ml-8">
                  02
                </div>
              </div>
              <div className="col-md-9 col-sm-12 text">
                <p className="text-sm ml-4 text-left">
                  Choose a birthday cake to send
                </p>
              </div>
            </div>
            <div className="row description">
              <div className=" col-md-3 col-sm-12 numbers">
                <div className="bg-bliss-pink w-12 h-12 rounded-full flex justify-center items-center text-white font-extrabold mb-3 ml-8">
                  03
                </div>
              </div>
              <div className="col-md-9 col-sm-12 text ">
                <p className="text-sm ml-4 text-left">
                  Place an order and we'll take care of the rest!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/select-twin">
        
        <Button  className="btn btn-primary btn-lg begin-button" color="" > Begin</Button>
      </Link>
      {loggedIn ? (
        <>
          <Login login={login} />
        </>
      ) : null}
    </div>
  );
}

Begin.propTypes = {};

export default Begin;
