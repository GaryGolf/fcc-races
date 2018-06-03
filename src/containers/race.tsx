import * as React from 'react';

import { RouteComponentProps } from 'react-router-dom';
const { connect } = require('react-redux');
const { withRouter } = require('react-router-dom');

interface Props {}
interface Params {
  num: number;
}
interface Store {
  races?: iRace[];
}


@connect(
  (store:AppStore) => ({
    races: store.races
  })
)
export default class RaceDetailsPage extends 
  React.Component<Props & Store & RouteComponentProps<Params>, null> {
  render() {
    const { num } = this.props.match.params
    const race = this.props.races.find(r => r.num == num)
    if (!race ) return<div> not found </div>
    const { positions } = race;

    const rows = !positions ? null : positions.map((p, idx) => (
      <tr key={p.racer}>
      <td>{idx + 1}</td>
      <td>{p.racer}</td>
      <td>{p.position}</td>
      </tr>
    ));

    return (
      <div> 
        <div> Race # {race.num}</div>
        <div>city: {race.city}</div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Racer</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
   )
  }
}
