import React from 'react';
import { connect } from 'react-redux';
import {toggleProfile } from '../../actions/index'

class UserDetail extends React.Component{
  render(){
    let user = this.props.user
    let url = user.background? user.background : "http://cdn.pcwallart.com/images/city-road-background-wallpaper-1.jpg"
    let background = {
      "backgroundImage": `url(${url})`,
    }

    return(
      <div style={background} className="user">
        <div className="overlay"></div>
        <div className="user-info">
          <img alt="no" src={user.img}/>
          <div className="user-data">
            <h3>{user.name}</h3>
          </div>

        </div>

        <div className="quote">
          <h1>{!user.quote? "Quote goes here" : user.quote }</h1>
          <p>{!user.author? "-author" : user.author}</p>
        </div>
        <i onClick={()=>this.props.dispatch(toggleProfile())} className="fa fa-cog" aria-hidden="true"></i>
      </div>
    )
  }
}
const store = (store) =>{
  return {
    user: store.user
  }
}

UserDetail = connect(store)(UserDetail)

export default UserDetail
