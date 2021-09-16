import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { Navbar ,Button} from '../components';
import {addFairy} from '../firebase/fairies';
import { Modal,Button as Bbutton, Spinner } from "react-bootstrap";
import  {becomeAFairy} from "../firebase/fairies"
import "../assets/css/landing.css";


function Begin(props) {

const [data, setData]= useState({name: "", email: "",birthday: ""});
const [fairySuccess,setFairySuccess] = useState("")
const [loggedIn, setLoggedIn] = useState(false)
useEffect( ()=>{
  handle()
},[])


const handle = async ()=>{

}

const handleChange =(e)=>{
  const { name, value } = e.target;
  setData({...data , [name]: value  });
}
const {name,email,birthday} =data
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
        <Modal
          show={loggedIn}
          onHide={()=>{setLoggedIn(false)}}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <form onSubmit={(e)=>{e.preventDefault() ;becomeAFairy(data,setFairySuccess);setLoggedIn(false)}}>
            <Modal.Header
              className="pb-0 border-bottom-0"
              closeButton
            ></Modal.Header>
            <Modal.Body>
             
              <div className="pl-4 pr-4">
                <h1 className="font-weight-bolder text-22 mb-4">Sign Up</h1>
               
                <div class="form-group">
                  <label>
                     Name <span className="required-field">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter First Name"
                    value={data.name}
                    onChange={handleChange}
                    className={`form-control `}
                  />
            
                </div>

               
                <div class="form-group">
                  <label>
                    Email Address <span className="required-field">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email ID"
                    value={data.email}
                    onChange={handleChange}
                    className={`form-control `}
                  />
                 
                </div>

                <div class="form-group">
                  <label>
                    Birthday <span className="required-field">*</span>
                  </label>
                  <input
                    type="text"
                    name="birthday"
                    placeholder="Enter Password"
                    value={data.birthday}
                    onChange={handleChange}
                    className={`form-control  `}
                  />
                 

                 </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-center border-top-0">
              <div className="d-flex flex-column w-100 pl-4 pr-4 pb-4">
                <Bbutton
                  variant="primary"
                  block
                  type="submit"
                >

                  sign up
                </Bbutton>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </>: null
      }
    </div>
  )
};

Begin.propTypes = {};

export default Begin;

