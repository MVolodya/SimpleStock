import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Collections from './pages/Collections.jsx';
import Admin from './pages/Admin.jsx';


export default class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/collections' component={Collections}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </div>
    )
  }
}
