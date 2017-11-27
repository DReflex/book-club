import React from 'react';
import { Link } from 'react-router-dom'

class Welcome extends React.Component {

  render(){
    return (
      <div>
        <h1>This is Welcome Dashboard</h1>
        <Link to={'/todo'}>home</Link>

      </div>
    )
  }
}


export default Welcome
