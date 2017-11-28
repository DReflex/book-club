import React from 'react';
import './reading.css'

class Reading extends React.Component {

  render(){
    return (
      <div className="user-reading">
        <div className="reading-book" >
          <img src="http://www.listchallenges.com/f/items/d598393a-64c8-4af0-8a6f-2032a2ec681a.jpg" alt="#"/>
          <div>
            <h1>Name of the book</h1>
            <p>author</p>
          </div>
          <div className="reading-circle"></div>
        </div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Add Note</a></li>
              <li><a href="#">Finish Reading</a></li>
            </ul>
          </div>
        </nav>

        <div className="text-area">
          <div className="buttons"><button>Save</button><button>delete</button></div>

          <textarea className="area" />
        </div>
        <div className="notes">
          <div className="single-note">
            <h2>Heading</h2>
          </div>
        </div>

      </div>
    )
  }
}


export default Reading
