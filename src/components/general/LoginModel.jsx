import React from 'react';

import { Modal,Button as Bbutton, Spinner } from "react-bootstrap";

export default function LoginModel(props) {
  var {data, setData, loggedIn, setLoggedIn,  setFairySuccess, handleChange,becomeAFairy} = props.login
  return (
    <div>
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
    </div>
  )
}
