import React from 'react'
import './navbar.css'
class Colapse extends React.Component{
  componentDidMount(){

  }
  handleToggle = (item) => {
    var toglle = document.getElementById(item)
    console.log(document.getElementById('menu').style.display);
    if(toglle.style.display !== 'block'){
      toglle.style.display = 'block'
    }else {
      toglle.style.display = 'none'
    }

  }

  render(){
    return(
      <div>
        <div onClick={()=> this.handleToggle('menu')} className="colapse-btn nav navbar-nav navbar-left ">
          <div className="line"> </div>
          <div className="line"> </div>
          <div className="line"> </div>
        </div>
        <div id="menu" className="menu">
          <div className="profile">
            <div className="profile-icon">
              <img src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png" alt="profile"/>
            </div>
            <div className="name-container">
              <h3>some long name</h3>
              <i className="fa fa-cogs" aria-hidden="true" />
            </div>
          </div>
          <div className="list">
            <h4>Reading list </h4><i onClick={()=> this.handleToggle('reading-list')} className="fa fa-plus-square" aria-hidden="true"></i>
          </div>
          <ul id="reading-list" className="reading">
            <li>book one</li>
            <li>book two</li>
          </ul>
          <div className="list">
            <h4>My books </h4><i onClick={()=> this.handleToggle('books')} className="fa fa-plus-square" aria-hidden="true"/>
          </div>
          <ul id="books" className="reading">
            <li>book one</li>
            <li>book two</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Colapse
