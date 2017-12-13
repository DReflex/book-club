import React from 'react';
import { Link } from 'react-router-dom'
import Colapse from './colapse'
import Logout from './logout'
class Navbar extends React.Component{

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Colapse />

            <ul className="nav navbar-nav navbar-right">
              <li> <Link to="/home"><i className="fa fa-home" aria-hidden="true"></i>Home</Link> </li>
              <li> <Link to="/user"><i className="fa fa-pie-chart" aria-hidden="true"></i>User</Link></li>
              <li> <Logout/></li>
            </ul>
        </div>
      </nav>
    )
  }
}


export default Navbar
