import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from './helpers/router';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Router routes={routes}/>
  </BrowserRouter>
, document.getElementById('app'));