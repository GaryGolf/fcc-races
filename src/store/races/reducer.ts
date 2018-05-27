import { Action } from './model';
import { initialState } from './selector';

export function racesReducer(state=initialState, action:Action):iRace[] {
  switch(action.type) {
    default:
      return state;
  }
}