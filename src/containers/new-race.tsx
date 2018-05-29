import * as React from 'react';
import { Dispatch } from 'redux';
const { connect } = require('react-redux');
import RaceForm from '../components/new-race-form';

interface Props {
  races: iRace[];
  num: number;
  dispatch: Dispatch<AppStore>;
}

@connect(
  (store:AppStore) => ({
    races: store.races,
    num: store.races.reduce((acc,race) => Math.max(acc, race.num), 0) + 1
  }),
  (dispatch: Dispatch<AppStore>) => ({ dispatch })
)
export default class CreateRacePage extends React.Component<Props, null> {

  private handleNewRaceSubmit = (city: string) => {
    const { num, dispatch } = this.props;
    dispatch({
      type: 'CREATE_RACE',
      payload: { city, num }
    })
  }
  
  render() {
    return (
      <div>
        <h3> Create new Race </h3>
        <RaceForm onSubmit={this.handleNewRaceSubmit} />
      </div>
    )
  }
}