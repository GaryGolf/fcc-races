export const CREATE_NEW_RACE = 'CREATE_NEW_RACE';
export const createNewRace = (num: number, city: string) => ({
  type: CREATE_NEW_RACE,
  payload: { num, city }
});
