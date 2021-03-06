import {BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import Incident from './pages/incident';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={Incident} />
      </Switch>
    </BrowserRouter>
  )
}

