import * as Redux from 'redux';
import { combineReducers } from 'redux';
import { teamsReducer } from './teams/reducer';
import { racersReducer } from './racers/reducer';
import { racesReducer } from './races/reducer';

const rootReducer: Redux.Reducer<AppStore> = combineReducers<AppStore>({
  teams: teamsReducer,
  racers: racersReducer,
  races: racesReducer
});

export default rootReducer;
