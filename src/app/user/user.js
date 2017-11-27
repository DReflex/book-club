import React from 'react';
import { Link } from 'react-router-dom'
import './user.css'
class Uesr extends React.Component {

  render(){
    return (
    <div>
      <div className="user">
        <div className="overlay"></div>
        <div className="user-info">
          <img alt="no" src="http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"/>
          <div className="user-data">
            <h3>Name</h3>
            <p>favourite book</p>
          </div>

        </div>

        <div className="quote">
          <h1>This is quote</h1>
          <p>this is author</p>
        </div>
        <i className="fa fa-cog" aria-hidden="true"></i>
      </div>
      <div className="search-box">
        <h2>Search book</h2>
        <div className="input">
          <div className="input-book"><img src="https://maxcdn.icons8.com/Share/icon/ios7/Science//book1600.png" alt=" "/></div>
          <input className="input-text" type="text"/>
          <button className="input-search">Search</button>
        </div>
        <div className="showing">
          <img src="http://www.listchallenges.com/f/items/d598393a-64c8-4af0-8a6f-2032a2ec681a.jpg" alt=" "/>
          <div className="showing-1">
            <h4>Name</h4>
            <h5>Author</h5>
          </div>
          <span><i className="fa fa-plus-circle" aria-hidden="true"></i>

          </span>
        </div>
      </div>
      <div className="book-list">
        <h2>My books</h2>
        <div className="list-container">
          <div className="my-books">
            <div className="single-book">
              <img src="http://www.listchallenges.com/f/items/d598393a-64c8-4af0-8a6f-2032a2ec681a.jpg" alt="none" />
              <div className="single-detail">
                <h3>Name</h3>
                <h5>Author</h5>
              </div>
              <span><i className="fa fa-exclamation-circle" aria-hidden="true"></i></span>
            </div>
          </div>
          <div className="my-list">
            <div className="single-book">
              <img src="http://www.listchallenges.com/f/items/d598393a-64c8-4af0-8a6f-2032a2ec681a.jpg" alt="none" />
              <div className="single-detail">
                <h3>Name</h3>
                <h5>Author</h5>
              </div>
              <div className="active"></div>
            </div>
          </div>

        </div>
      </div>


    </div>
    )
  }
}


export default Uesr
