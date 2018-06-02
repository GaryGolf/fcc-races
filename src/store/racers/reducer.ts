import { Action } from './model';

export const initialState = [
  { name: 'Bob', team: 'Torpedo' },
  { name: 'John', team: 'Torpedo' },
  { name: 'Steve', team: 'PowerShift' },
  { name: 'Mark', team: 'PowerShift' },
  { name: 'Jackob', team: 'Clutches' },
  { name: 'Sarah', team: 'Clutches' }
];

export function racersReducer(state=initialState, action:Action):iRacer[] {
  switch(action.type) {
    default:
      return state;
  }
}