import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import { RouteWithSubRoutes } from './helpers/router';
import { configureStore } from './store';

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
  <Provider store={store} key="provider">
    <BrowserRouter>
      <Switch>
        {routes.map((route, idx) => <RouteWithSubRoutes key={idx} {...route}/>)}
      </Switch>
    </BrowserRouter>
  </Provider>
, document.getElementById('app'));