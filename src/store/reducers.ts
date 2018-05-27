import * as Redux from 'redux';
import { combineReducers } from 'redux';
import { teamsReducer } from './teams/reducer';
import { racersReducer } from './racers/reducer';

const rootReducer: Redux.Reducer<AppStore> = combineReducers<AppStore>({
  teams: teamsReducer,
  racers: racersReducer
});

export default rootReducer;
