import React from 'react';
import { Link } from 'react-router-dom';
import Colapse from './colapse';
import Logout from './logout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Navbar extends React.Component{
  constructor(){
    super();
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    window.addEventListener('scroll', (e)=>this.handleScroll());
  }
  componentWillUnmount() {
      document.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () =>{
    let navbar = document.getElementById('navbar')

    if(this.props.location.pathname != "/"){
      navbar.className= "navbar navbar-default navbar-rolling"
    }else{
      if(window.pageYOffset > window.innerHeight -250){
        navbar.className = "navbar navbar-default navbar-rolling"
      }
      else{
        navbar.className = "navbar navbar-default"
      }
    }

  }

  render(){
    return(
      <nav id="navbar" className="navbar navbar-default">
        <div className="container-fluid">
          <Colapse />

            <ul className="nav navbar-nav navbar-right">
              <li className="link"> <Link to="/home"><i className="fa fa-home" aria-hidden="true"></i>Home</Link> </li>
              <li className="link"> <Link to="/user"><i className="fa fa-pie-chart" aria-hidden="true"></i>User</Link></li>
              <li className="link"> <Logout/></li>
              <li className="link"><Link to="/"><i className="fa fa-info" aria-hidden="true"></i>Info</Link></li>
            </ul>
        </div>
      </nav>
    )
  }
}

const store = (store) =>{
  return {
    user: store.user
  }
}

Navbar = connect(store)(Navbar)
export default withRouter(Navbar)
