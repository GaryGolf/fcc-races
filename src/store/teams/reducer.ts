import { TeamsAction } from './model';

const initialState:iTeam[] = ['Torpedo', 'PowerShift', 'Clutches'];

export function teamsReducer(state=initialState, action?:TeamsAction): iTeam[] {
  switch(action.type) {
    default:
      return state;
  }
}