import React from 'react';
import Main from './main'
import Navbar from './navbar/navbar'

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Main />
      </div>
    )
  }
}
export default App
