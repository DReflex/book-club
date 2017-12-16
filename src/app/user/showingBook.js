import React from 'react';
import { connect } from 'react-redux';
import { resetBook } from '../../actions/index'
import './showingBook.css'
class ShowingBook extends React.Component{

  handleSubmit = () =>{
    let book = this.props.searchBook
    console.log("this is props", book);
    fetch('/api/books',{
      method: 'POST',
      mode: 'CORS',
      body: JSON.stringify({
        id:book.id,
        title: book.title,
        img: book.img,
        selfLink: book.selfLink,
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(()=>{
      fetch('api/comment',{
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify({
          id:book.id,
          title: book.title,
          comments: []
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      this.props.dispatch(resetBook())
    })
  }
  render(){
    let showing= this.props.searchBook
    return(
      <div className="showing-container">
        <img src={showing.img} alt=" "/>
        <div className="showing">
          <h2>{showing.title}</h2>
          <h5>{showing.author}</h5>
          <a target="_blank" href={showing.link}>{showing.title}</a>
            <button className="input-search" onClick={this.handleSubmit}>add to server</button>
        </div>
      </div>
    )
  }
}
const store = (store)=>{
  return {
    searchBook: store.searchBook,
  }
}
ShowingBook = connect(store)(ShowingBook)
export default ShowingBook
