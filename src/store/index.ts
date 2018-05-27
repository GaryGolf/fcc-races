import * as Redux from 'redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import { teamsReducer } from './teams/reducer';
import { racersReducer } from './racers/reducer';
import { racesReducer } from './races/reducer';

const rootReducer: Redux.Reducer<AppStore> = combineReducers<AppStore>({
  teams: teamsReducer,
  racers: racersReducer,
  races: racesReducer
});

export function configureStore(initialState?: AppStore): Redux.Store<AppStore> {

  const middlewares: Redux.Middleware[] = [promise, thunk];

  if (PRODUCTION) middlewares.push(createLogger());

  const composeEnhancers = ( PRODUCTION && typeof window != 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const enhancers = composeEnhancers( applyMiddleware(...middlewares));
  const store: Redux.Store<AppStore> = createStore(rootReducer, initialState, enhancers);

  if (!PRODUCTION && (module as any).hot) {
    (module as any).hot.accept('../store', () => {
      store.replaceReducer((require('../store')));
    });
  }

  return store;
}

export default rootReducer
