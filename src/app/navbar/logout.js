import React from 'react';
import{ userLogout } from '../../actions/index';
import { connect } from 'react-redux'
import './navbar.css'

class Logout extends React.Component{

  handleLogout =() =>{
    this.props.dispatch(userLogout())
  }
  render(){
    return(
      <div onClick={this.handleLogout} className="logout">
          <i className="fa fa-sign-out" aria-hidden="true"></i><p>Logout</p>
      </div>
    )
  }
}
const store = (store) =>{
  return {
    user: store.user,
  }
}

Logout = connect(store)(Logout)
export default Logout
