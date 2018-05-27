import { initialState } from './selector';
import { TeamsAction } from './model';

export function teamsReducer(state=initialState, action?:TeamsAction): iTeam[] {
  switch(action.type) {
    default:
      return state;
  }
}