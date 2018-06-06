import HomePage from './containers/home';
import RacersPage from './containers/racers';
import CreateRacePage from './containers/new-race';
import RacesTablePage from './containers/races';
import RaceDetailsPage from './containers/race';

export const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/racers', component: RacersPage },
  { path: '/new-race', component: CreateRacePage },
  { path: '/races', component: RacesTablePage, exact: true },
  { path: '/races:num', component: RaceDetailsPage }
]
