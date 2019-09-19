import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
// eslint-disable-next-line
import css from './scss/_style-all.scss';

import Home from './components/home';
import Profile from './components/profiles';
import Posts from './components/posts';
import PostItem from './components/post_item';
import NotFound from './components/not_found';
import LifeCycle from './components/life_cycle';
import Conditional from './components/conditional';


const App = () => {
  return (
    <BrowserRouter>
    <header>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/profile' activeClassName='selected' activeStyle={{color:'red'}}>Profile</NavLink>
      <NavLink to='/posts'>Posts</NavLink>
      <NavLink to='/conditional'>Conditional</NavLink>
      <NavLink to='/cycle'>Life Cycle of React</NavLink>
      <hr/>
    </header>
    <div>
      <Switch>
        <Route path='/posts/:id/:username' component={PostItem}/>
        <Route path='/posts'  exact component={Posts}/>
        <Route path='/conditional'  exact component={Conditional}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/cycle' exact component={LifeCycle}/>
        <Route path='/' exact component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));