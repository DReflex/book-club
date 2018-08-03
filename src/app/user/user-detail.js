import React from 'react';
import { connect } from 'react-redux';
import {toggleProfile } from '../../actions/index'

class UserDetail extends React.Component{
  render(){
    let user = this.props.user
    console.log(this.props.user);
    let url = user.background? user.background : "https://images.unsplash.com/photo-1533201599223-1a45243c9702?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41cdfa444432255200621f1d666cbdd6&auto=format&fit=crop&w=1350&q=80"
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
