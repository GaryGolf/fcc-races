export const CREATE_NEW_RACE = 'CREATE_NEW_RACE';
export const createNewRace = (city: string) =>
  ( dispatch, getState) => {

    const store:AppStore = getState();
    const num = store.races.reduce((acc,race) => Math.max(acc,race.num) ,0) + 1;
    return dispatch({
      type: CREATE_NEW_RACE,
      payload: { num, city }
    })
    
  }
