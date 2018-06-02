import { Action } from './model';
import { CREATE_NEW_RACE, SUBMIT_POSITIONS } from './action'

const initialState:iRace[] = [
  { 
    num: 1,
    city: 'Malmo',
    positions: [
      { racer: 'Bob',   position: 2},
      { racer: 'Sarah', position: 1},
      { racer: 'John',  position: 2},
      { racer: 'Mark',  position: 3},
      { racer: 'Steve', position: 4}
    ] 
  }
];

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