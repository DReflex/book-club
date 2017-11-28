import React from 'react';
import { Link } from 'react-router-dom'
import './detail.css'

class Book extends React.Component {

  render(){
    return (
      <div className="book-detail">
        <div className="book-heading" >
          <img src="http://www.listchallenges.com/f/items/d598393a-64c8-4af0-8a6f-2032a2ec681a.jpg" alt="#"/>
          <div>
            <h1>Name of the book</h1>
            <p>author</p>
          </div>
          <div className="vote">
            <div className="number"><h4>5</h4></div>
            <div className="vote-option">
              <span><i className="fa fa-chevron-up" aria-hidden="true"></i></span>
              <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="vote">
            <div className="number"><h4>5</h4></div>
            <div className="vote-option">
              <span><i className="fa fa-chevron-up" aria-hidden="true"></i></span>
              <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
            </div>
          </div>
          <div className="author">
            <img src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png" alt="profile" />
            <h3>Nickname</h3>
          </div>
          <div className="comment">
            <p>some thext goes here to show supp for this project</p>
          </div>
          <div className="response">
            <div className="author">
              <img src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png" alt="profile" />
              <h3>Nickname</h3>
            </div>
            <div className="comment">
              <p>some thext goes here to show supp for this project</p>
            </div>
          </div>
        </div>
        <button>Add Comment</button>
      </div>
    )
  }
}


export default Book
