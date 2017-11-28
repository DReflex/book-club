import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'


class Home extends React.Component {

  render(){
    return (
      <div className="home">
        <h1>This is Home</h1>
        <div className="book-list">
          <div className="home-book">
            <img src="http://www.listchallenges.com/f/items/d598393a-64c8-4af0-8a6f-2032a2ec681a.jpg" alt="#0" />
            <h4>Book</h4>
            <p>author</p>
          </div>
          <div className="home-book">
            <img src="http://www.listchallenges.com/f/items/d598393a-64c8-4af0-8a6f-2032a2ec681a.jpg" alt="#0" />
            <h4>Book</h4>
            <p>author</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Home
