import HomePage from './containers/home';
import RacersPage from './containers/racers';
import CreateRacePage from './containers/new-race';

export const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/racers', component: RacersPage },
  { path: '/new-race', component: CreateRacePage }
]