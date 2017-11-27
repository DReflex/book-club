import React from 'react';
import { Link } from 'react-router-dom'

class Detail extends React.Component {

  render(){
    return (
      <div>
        <h1>This is Detail</h1>
        <Link to={'/todo'}>home</Link>

      </div>
    )
  }
}


export default Detail
