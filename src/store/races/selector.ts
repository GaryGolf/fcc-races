import { createSelector } from 'reselect';

export const initialState:iRace[] = [
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

const getRaces = state => state.races;

export const getLastRaceNum = createSelector (
  [getRaces], races => races.reduce((acc, race) => Math.max(acc, race.num), 0)
);