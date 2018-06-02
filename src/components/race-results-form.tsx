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

    const rows = this.props.positions.map(p => (
      <tr key={p.racer}>
      <td>{p.racer}</td>
      <td>{p.position}</td>
      </tr>
    ));

    return (
      <div>
        <table>
          <tr>
            <th>Racer</th>
            <th>Position</th>
          </tr>
          {rows}
        </table>
        <button onClick={onSubmit}>Submit</button>
      </div>
    );
  }
}
