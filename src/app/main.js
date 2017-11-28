import React from 'react';
import Home from './home/home';
import { Switch, Route } from 'react-router-dom';
import User from './user/user';
import Reading from './user/reading/reading'
import Welcome from './welcome/welcome'
import Book from './detail/detail'

class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path='/book' component ={Book} />
          <Route exact path='/user' component={User} />
          <Route  path='/user/reading' component={Reading} />
        </Switch>
      </main>
    )
  }
}
export default Main
