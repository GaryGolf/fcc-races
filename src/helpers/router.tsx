import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

export const RouterHelper = ({ routes }) => (
  <Switch>
    <h1>{'Races'}</h1>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </Switch>
)