import * as React from 'react';

const { connect } = require('react-redux');
import RaceForm from '../components/new-race-form';

interface Props {
  races: iRace[];
}

@connect(
  (store:AppStore) => ({
    races: store.races
  })
)
export default class CreateRacePage extends React.Component<Props, null> {
  
  render() {
    return (
      <div>
        <h3> Create new Race </h3>
        <RaceForm onSubmit={console.log} />
      </div>
    )
  }
}