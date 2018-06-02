import { Action } from './model';
import { initialState } from './selector';
import { CREATE_NEW_RACE, SUBMIT_POSITIONS } from './action'

export function racesReducer(state=initialState, action:Action):iRace[] {
  switch(action.type) {
    case CREATE_NEW_RACE : {
      const { num, city } = action.payload;
      return [...state, { num, city }];
    }

    case SUBMIT_POSITIONS : {
      const { num, positions } = action.payload;
      return state.map(race => race.num != num ? race : { ...race, positions });
    }
    default:
      return state;
  }
}