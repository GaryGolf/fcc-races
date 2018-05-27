import * as Redux from 'redux';
import { combineReducers } from 'redux';
import { teamsReducer } from './teams/reducer';

const rootReducer: Redux.Reducer<AppStore> = combineReducers<AppStore>({
  teams: teamsReducer
});

export default rootReducer;
