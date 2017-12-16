import React from 'react';
import { connect }from 'react-redux';
import { addStar, r_star} from '../../actions/index';
import { Link } from 'react-router-dom';
import Logout from './logout';


import './navbar.css'
class Colapse extends React.Component{
  componentDidMount(){
    this.props.dispatch(r_star())
    this.updateStars()

  }
  handleToggle = (item, item2) => {
    var toglle = document.getElementById(item)
    var overlay = document.getElementById(item2)
    if(toglle.style.display !== 'block'){
      toglle.style.display = 'block'
      overlay? overlay.style.display = 'block': undefined
    }else {
      toglle.style.display = 'none'
      overlay? overlay.style.display = 'none': undefined

    }

  }
  updateStars = () =>{
    let user = this.props.user
    if(user.stared){
      user.stared.map((id) =>{
        fetch(`api2/books/${id}`).then(res => res.json())
        .then((book) =>{
         let data = {
           id:book.id,
           title: book.title,
           img: book.img
         }
         return this.props.dispatch(addStar(data))
        })
        return null;
      })
    }
    return null
  }
  render(){
    let height=window.innerHeight
    let star = this.props.staredBook
    return(
      <div>
        <div onClick={()=> this.handleToggle('menu', 'colapse-overlay')} className="colapse-btn nav navbar-nav navbar-left ">
          <div className="line"> </div>
          <div className="line"> </div>
          <div className="line"> </div>
        </div>
        <div style={{height:height}} id="menu" className="menu">
          <div className="profile">
            <div className="profile-icon">
              <img src={this.props.user.img} alt="profile"/>
            </div>
            <div className="name-container">
              <h3>{this.props.user.name}</h3>
            </div>
          </div>
          <div id="xs-colapse" className="list">
            <ul className="reading">
              <li><Link to="/home"><i className="fa fa-home" aria-hidden="true"></i>Home</Link></li>
                <li> <Link to="/user"><i className="fa fa-pie-chart" aria-hidden="true"></i>User</Link></li>
                <li><Link to="/"><i className="fa fa-info" aria-hidden="true"></i>Info</Link></li>
                <li> <Logout/></li>
            </ul>
          </div>
          <div className="list">
            <h4>Reading list </h4><i onClick={()=> this.handleToggle('reading-list')} className="fa fa-plus-square" aria-hidden="true"></i>
          </div>
          { this.props.user.loginStatus? (<ul id="reading-list" className="reading">
                {
                  star.map((book, i) =>{
                    return ( <li key={i}><Link to={`/book/${book.id}`}>{book.title}</Link></li>)
                  })
                }
                </ul>)
        :(<ul id="reading-list" className="reading">
            <li>Connect and start reading</li>
          </ul>)
        }

        </div>
        <div style={{height:height}} id="colapse-overlay" onClick={() => this.handleToggle('menu', 'colapse-overlay')} className="colapse-overlay">

        </div>
      </div>
    )
  }
}
const store = (store) =>{
  return{
    user: store.user,
    staredBook: store.staredBook
  }
}
Colapse = connect(store)(Colapse)
export default Colapse
