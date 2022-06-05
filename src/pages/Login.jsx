import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
const Login = () => {
  const [loginCreds, setLoginCreds ] =useState({});
  const {login} = useContext(AuthContext);
  const handleChange=(e) =>{
  
    const {name,value} =e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
const handleSubmit =(e)=>{
  e.preventDefault();
  login();
  Navigate("/feeds");
};
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "300px",
          gap: "30px",
        }}
        >
          <input name="email" 
          type="text"
           placeholder="Enter Email"
           onChange={handleChange}
           />
          <input
          name="password" 
          type="current-password"
          placeholder="Enter-password"
          onChange={handleChange}
          />
          <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;