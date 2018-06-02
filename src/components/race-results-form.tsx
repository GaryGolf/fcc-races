import * as React from 'react';

interface Props {
  num: number;
  positions:iPosition[];
  onSubmit: () => void;
}


export default class RaceResultsForm extends React.PureComponent<Props, null> {

  render() {
    const { positions, onSubmit } = this.props;
    if (!positions || !positions.length) return null;

    console.log(positions)

    const rows = this.props.positions.map(p => (
      <tr key={p.racer}>
      <td>{p.racer}</td>
      <td>{p.position}</td>
      </tr>
    ));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Racer</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <button onClick={onSubmit}>Submit</button>
      </div>
    );
  }
}
