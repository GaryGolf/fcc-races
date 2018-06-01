import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
const { connect } = require('react-redux');
import RaceForm from '../components/new-race-form';
import { createNewRace } from '../store/actions';
import { getLastRaceNum } from '../store/selectors'

interface Actions {
  createNewRace?: (num: number, city:string) => void;
}

interface Props {
  races: iRace[];
  num: number;
  actions: Actions;
  dispatch: Dispatch<AppStore>;
}


@connect(
  (store:AppStore) => ({
    races: store.races,
    // num: store.races.reduce((acc,race) => Math.max(acc, race.num), 0) + 1
    num: getLastRaceNum(store)
  }),
  (dispatch: Dispatch<AppStore>) => ({ 
    actions: bindActionCreators({ createNewRace }, dispatch),
    dispatch
  })
)
export default class CreateRacePage extends React.Component<Props, null> {

  private handleNewRaceSubmit = (city: string) => {
    const { num, actions } = this.props;
    actions.createNewRace(num + 1, city)
  }
  
  render() {
    const { num, actions } = this.props;
    return (
      <div>
        <h3> Create new Race </h3>
        <RaceForm onSubmit={this.handleNewRaceSubmit} />
      </div>
    )
  }
}