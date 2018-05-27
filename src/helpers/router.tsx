import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

export const Router = props => (
  <Switch>
    {props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </Switch>
)