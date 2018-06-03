import { createSelector } from 'reselect';

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
);

export const getRacesTable = createSelector (
  [getRaces], (races:iRace[]) => races.map(race => ({
    num: race.num,
    city: race.city,
    participiants: !race.positions ? 0 : race.positions.length
  }))
);