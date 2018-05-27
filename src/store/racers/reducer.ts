import { Action } from './model';
import { initialState } from './selector';

export function racersReducer(state=initialState, action:Action):iRacer[] {
  switch(action.type) {
    default:
      return state;
  }
}