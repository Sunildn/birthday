import React, { useState } from "react";

import { Modal, Button as Bbutton, Spinner } from "react-bootstrap";
import { validateName, required, validateEmail } from "../../utils/validation";
import {becomeAFairy} from "../../firebase/fairies"

export default function LoginModel(props) {
  var {
    data,
    setData,
    loggedIn,
    setLoggedIn,
    setFairySuccess,
    handleChange,
    
  } = props.login;
  const [error, setError] = useState({
    errorName: "",
    errorEmail: "",
    errorBirthday: "",
  });
  return (
    <div>
      <Modal
        show={loggedIn}
        onHide={() => {
          setLoggedIn(false);
        }}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const inputError = {
              errorName: validateName(data.name),
              errorEmail: validateEmail(data.email),
              errorBirthday: required(data.birthday),
            };
            
            if (
              !inputError.errorName &&
              !inputError.errorEmail &&
              !inputError.errorBirthday
            ) {
              becomeAFairy(data, setFairySuccess);
              setLoggedIn(false);
            }else{
              setError(inputError);
            }
          }}
        >
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
                <div>{error.errorName && <span className="input-error-display">{error.errorName}</span>}</div>
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
                <div>{error.errorEmail && <span className="input-error-display">{error.errorEmail}</span>}</div>
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
                <div>{error.errorBirthday && <span className="input-error-display">{error.errorBirthday}</span>}</div>
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
              <Bbutton variant="primary" block type="submit">
                sign up
              </Bbutton>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
