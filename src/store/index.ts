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
  const create = window.devToolsExtension && !PRODUCTION
        ? window.devToolsExtension()(createStore) : createStore

  if (PRODUCTION) middlewares.push(createLogger({collapsed: true}));

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(create)
  const store = createStoreWithMiddleware(rootReducer, initialState) as Redux.Store<AppStore>

  if (!PRODUCTION && (module as any).hot) {
    (module as any).hot.accept('../store', () => {
      store.replaceReducer((require('../store')));
    });
  }

  return store;
}

export default rootReducer;
