import * as Redux from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';

export function configureStore(initialState?: AppStore): Redux.Store<AppStore> {

  const middlewares: Redux.Middleware[] = [promise, thunk];

  if (PRODUCTION) middlewares.push(createLogger());

  const composeEnhancers = ( PRODUCTION && typeof window != 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const enhancers = composeEnhancers( applyMiddleware(...middlewares));
  const store: Redux.Store<AppStore> = createStore(rootReducer, initialState, enhancers);

  if (!PRODUCTION && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  return store;
}
