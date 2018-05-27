import { initialState } from './selector';
import { TeamsAction, TeamsStore} from './model';

export function teamsReducer(state=initialState, action?:TeamsAction): TeamsStore {
  switch(action.type) {
    default:
      return state;
  }
}