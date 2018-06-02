export const CREATE_NEW_RACE = 'CREATE_NEW_RACE';
export const createNewRace = (num: number, city: string) => ({
  type: CREATE_NEW_RACE,
  payload: { num, city }
});

export const SUBMIT_POSITIONS = 'SUBMIT_POSITIONS';
export const submitPositions = (num: number, positions:iPosition[]) => ({
  type: SUBMIT_POSITIONS,
  payload: { num, positions }
})