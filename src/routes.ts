import HomePage from './containers/home';
import RacersPage from './containers/racers';
export const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/racers', component: RacersPage, exact: true }
]