import React from 'react';
import{ userLogout } from '../../actions/index';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import './navbar.css'

class Logout extends React.Component{
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout =() =>{
    this.props.dispatch(userLogout())
    this.props.history.push('/')
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
export default withRouter(Logout)
