import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myroute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/dashboard/" component={Dashboard} isClosed />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />

      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
