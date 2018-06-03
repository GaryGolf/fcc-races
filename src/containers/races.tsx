import * as React from 'react';
import { getRacesTable } from '../store/selectors'

const { connect } = require('react-redux');

interface Props {}
interface Store {
  races?: { num: number, city: string, participiants: number}[];
}

@connect(
  (store:AppStore) => ({
    races: getRacesTable(store)
  })
)
export default class RacesTablePage extends React.Component<Props & Store, null> {
  render() {

    console.log(this.props)

    const rows = this.props.races.map(race => (
      <tr key={race.num}>
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