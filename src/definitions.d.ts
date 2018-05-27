
declare type iTeam = string;
declare interface iRacer {
  name: string;
  team: string;
}
declare interface iPosition {
  racer: string;
  position: number;
}
declare interface iRace {
  num: number;
  city: string;
  positions: iPosition[]
}


declare interface AppStore {
  teams: iTeam[];
  racers: iRacer[];
  races: iRace[];
}