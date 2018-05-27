import * as React from 'react';

const { connect } = require('react-redux');

interface Props {}
interface Store {
  racers?: iRacer[];
}

@connect(
  (store:AppStore) => ({
    racers: store.racers
  })
)
export default class RacersPage extends React.Component<Props & Store, null> {
  render() {
    return (
      <div> 
        <h4>Racers page</h4>
        {this.props.racers.map(racer => <div key={racer.name}>{racer.name}</div>)}
      </div>
    )
  }
}