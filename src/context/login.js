import React, { createContext, useState } from 'react';
// import PropTypes from 'prop-types';

export const LoginContext = createContext();


const LoginContextProvider = (props) => {
  const [data, setData]= useState({name: "", email: "",birthday: ""});
  const [fairySuccess,setFairySuccess] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  
  
  const handleChange =(e)=>{
    const { name, value } = e.target;
    setData({...data , [name]: value  });
  }
  return (
    <LoginContext.Provider
      value={{ 
        data, setData,
        loggedIn, setLoggedIn, 
        setFairySuccess, handleChange
      }}
    >
      { props.children }
    </LoginContext.Provider>
  )
}


export default LoginContextProvider;