import { Action } from './model';
import { initialState } from './selector';
import { CREATE_NEW_RACE } from './action'

export function racesReducer(state=initialState, action:Action):iRace[] {
  switch(action.type) {
    case CREATE_NEW_RACE : {
      const { num, city } = action.payload;
      return [...state, { num, city }];
    }
    default:
      return state;
  }
}