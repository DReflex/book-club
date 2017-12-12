import SocialButton from './login-div';
import React from 'react';
import { connect } from 'react-redux'
import {userLogin} from '../../actions/index'
import './welcome.css'
class Login extends React.Component {


handleSocialLogin = (user) => {
  console.log("user", user);
  fetch(`/api/user/${user._profile.id}`)
  .then((res) => {
    if(res.status === 404){
      fetch('/api/user', {
                method: 'POST',
                mode: 'CORS',
                body: JSON.stringify({
                  name: user._profile.firstName,
                  id: user._profile.id,
                  img:user._profile.profilePicURL,
                  nickname: user._profile.firstName
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }

  }).then(()=>{
    let data ={
      name: user._profile.firstName,
      id: user._profile.id,
      loginStatus: true,
      img: user._profile.profilePicURL
    }
    console.log(data);
   this.props.dispatch(userLogin(data))
  })
}

handleSocialLoginFailure = (err) => {
  console.error("hello", err)
}

  render(){
    return(
        <SocialButton
      provider='facebook'
      appId='354675081620273'
      onLoginSuccess={this.handleSocialLogin}
      onLoginFailure={this.handleSocialLoginFailure}
    >
    </SocialButton>
    )
  }
}
const store = (store) =>{
  return {
    user: store.user
  }
}

Login = connect(store)(Login)

export default Login
