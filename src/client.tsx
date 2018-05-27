import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from './helpers/router';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { configureStore } from './store';
import { Provider } from 'react-redux';

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
  <Provider store={store} key="provider">
    <BrowserRouter>
      <Router routes={routes}/>
    </BrowserRouter>
  </Provider>
, document.getElementById('app'));