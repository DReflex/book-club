import React from 'react';
import Home from './home/home';
import { Switch, Route } from 'react-router-dom';
import Detail from './detail/detail';
import User from './user/user';
import Book from './user/book/book'
import Profile from './user/profile/profile'
import Welcome from './welcome/welcome'

class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path="/home" component={Home} />
          <Route exact path='/user' component={User} />
          <Route  path='/user/book' component={Book} />
          <Route  path='/user/profile' component={Profile} />
          <Route  path='/user/detail' component={Detail} />
        </Switch>
      </main>
    )
  }
}
export default Main
