import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home  from './components/home';
import ArtistDetail  from './components/artistDetail';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={ Home }></Route>
      <Route path="/artist/:id" exact component={ArtistDetail}/>

    </Switch>
  )
}

export default Routes;