import React from 'react';
import { connect } from 'react-redux';
import {q_quote, q_background, q_author, toggleProfile, q_name, q_img, q_reset, updateProfile } from '../../actions/index'


class UserEditing extends React.Component{
  componentDidMount(){
    this.props.dispatch(q_reset())
  }
  updateQuery = (type, e) =>{
    let text = e.target.value;
    switch (type) {
      case "quote":
        return this.props.dispatch(q_quote(text))
      case "author":
      return this.props.dispatch(q_author(text))
      case "background":
      return this.props.dispatch(q_background(text))
      case "img":
      return this.props.dispatch(q_img(text))
      case "name":
      return this.props.dispatch(q_name(text))

      default:
      return console.log("error");

    }
  }
  updateProfile = () =>{
    let input = this.props.input
    let user= this.props.user

    let name = (input.name === "")? user.name : input.name
    let img = (input.img === "")? user.img : input.img
    let background = (input.background === "")? user.background : input.background
    let quote = (input.quote === "")? user.quote : input.quote
    let author = (input.author === "")? user.author : input.author

    let data = {
      name,
      img,
      background,
      quote,
      author
    }
    this.props.dispatch(updateProfile(data))
    fetch(`/api2/user/${user.id}`,{
      method: 'PUT',
      mode: "CORS",
      body: JSON.stringify({
        data: data
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    })
  }
  render(){
    let input = this.props.input
    return(
      <div className="user">
        <div className="overlay"></div>
        <div className="user-info">
          <img alt="no" src="http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"/>
          <div className="user-data">
            <h4 className="edit-quote"><label htmlFor="name">Name: </label><input name="name" placeholder="add name"onChange={e=> this.updateQuery("name", e)} value={input.name} /></h4>
            <h4 className="edit-quote"><label htmlFor="img">Img: </label><input name="img" placeholder="add img" onChange={e=> this.updateQuery("img", e)} value={input.img} /></h4>
          </div>

        </div>

        <div className="quote">
          <h3 className="edit-quote"><label htmlFor="quote">Quote: </label><input name="quote" placeholder="add qoute" onChange={e=> this.updateQuery("quote", e)} value={input.quote}  /></h3>
          <p className="edit-quote"><label htmlFor="author">Author: </label><input name="author" placeholder="add author" onChange={e=> this.updateQuery("author", e)} value={input.author}/></p>
          <p className="edit-quote"><label htmlFor="background">Background: </label><input name="background" placeholder="add background" onChange={e=> this.updateQuery("background", e)}/></p>
            <button onClick={this.updateProfile}>SAVE</button>
        </div>
        <i onClick={()=>this.props.dispatch(toggleProfile())} className="fa fa-times" aria-hidden="true"></i>

      </div>
    )
  }
}
const store = (store) =>{
  return {
    user: store.user,
    input: store.input
  }
}

UserEditing = connect(store)(UserEditing)

export default UserEditing
