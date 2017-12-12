import React from 'react';
import SocialLogin from 'react-social-login';
import './welcome.css'
const Button = ({ children, triggerLogin, ...props }) => (
  <button className="loginButton" onClick={triggerLogin} {...props}>
    conenct
  </button>
)


export default SocialLogin(Button)
