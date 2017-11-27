import React from 'react';
import { Link } from 'react-router-dom'

class Book extends React.Component {

  render(){
    return (
      <div>
        <h1>This is Book Dashboard</h1>
        <Link to={'/user'}>User dashboard</Link>

      </div>
    )
  }
}


export default Book
