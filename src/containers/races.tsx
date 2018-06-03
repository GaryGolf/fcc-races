import * as React from 'react';
import { getRacesTable } from '../store/selectors'
import { RouteComponentProps as Router } from 'react-router-dom';

const { connect } = require('react-redux');
const { withRouter } = require('react-router-dom');

interface Props {}
interface Store {
  races?: { num: number, city: string, participiants: number}[];
}

@withRouter
@connect(
  (store:AppStore) => ({
    races: getRacesTable(store)
  })
)
export default class RacesTablePage extends React.Component<Props & Store & Router<null>, null> {

  private handleRaceClick = (event:React.MouseEvent<HTMLTableRowElement>) => {
    const num = event.currentTarget.dataset.idx
    this.props.history.push(`/races${num}`);
  }
  render() {

    const rows = this.props.races.map(race => (
      <tr key={race.num} data-idx={race.num} onClick={this.handleRaceClick}>
        <td>{race.num}</td>
        <td>{race.city}</td>
        <td>{race.participiants}</td>
      </tr>
    ));

    return (
      <div> 
        <h4>Races page</h4>
        <table>
          <thead> 
            <tr>
              <th>#</th>
              <th>city</th>
              <th>ppl</th>
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