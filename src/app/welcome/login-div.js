import React from 'react';
import SocialLogin from 'react-social-login';
import './welcome.css'
const Button = ({ children, triggerLogin, ...props }) => (
  <button className="loginButton" onClick={triggerLogin} {...props}>
    <img alt="" src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png" />
    <p className="xs-hide">connect</p>
  </button>
)


export default SocialLogin(Button)
