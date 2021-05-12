import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
import HeyArnoldDetailContainer from '../../containers/HeyArnoldDetailContainer';
import './App.css';

export default () => (
  <Router>
  <Switch>
    <Route exact path="/">
        <HeyArnoldContainer/>
    </Route>
    <Route 
      exact path="/:id"
      render={(props) => (
        <HeyArnoldDetailContainer {...props} />
      )}
     />
      
  </Switch>
</Router>
);