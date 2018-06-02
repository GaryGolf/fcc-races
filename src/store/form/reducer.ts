import { Action } from './model'
import {
  ADD_POSITION, REMOVE_POSITION, CLEAR_FORM
} from './action';

const initialState:iPosition[] = [];

export function formReducer(state=initialState, action:Action):iPosition[] {
  
  switch(action.type) {

    case ADD_POSITION : 
      return [...state, action.payload.position];
    
    case REMOVE_POSITION : 
      return state.filter(p => p.racer != action.payload.position.racer);
    
    case CLEAR_FORM :
      return initialState;
    
    default:
      return state;
  }
}