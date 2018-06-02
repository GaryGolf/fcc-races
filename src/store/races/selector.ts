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
const getRacers = state => state.racers;
const getFormPositions = state => state.form;

export const getLastRaceNum = createSelector (
  [getRaces], races => races.reduce((acc, race) => Math.max(acc, race.num), 0)
);

export const getLastRacePositions = createSelector (
  [getRaces, getLastRaceNum], (races:iRace[], num:number):iPosition[] => {
    const race:iRace = races.find(r => r.num == num)
    if (!race) return null; 
    return race.positions || [];
  }
);

export const getInactiveRacers = createSelector (
  [getRacers, getFormPositions], 
  (racers:iRacer[], positions:iPosition[]) => {
    const racersAvailable = racers.map(r => r.name); 
    if (!positions) return racersAvailable;
    const busyRacers = positions.map(p => p.racer)
    return racersAvailable.filter(r => !busyRacers.includes(r))
  }
)