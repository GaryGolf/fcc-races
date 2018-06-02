import * as React from 'react';

interface Props {
  num: number;
  positions:iPosition[];
  onDelete: (position:iPosition) => void;
}


export default class RaceResultsForm extends React.PureComponent<Props, null> {

  private handleDeletePosition = (event:React.MouseEvent<HTMLTableCellElement>) => {
    const { positions, onDelete } = this.props;
    const idx = event.currentTarget.dataset.idx;
    onDelete(positions[idx]);
  }

  render() {
    const { positions } = this.props;
    if (!positions || !positions.length) return null;

    const rows = this.props.positions.map((p, idx) => (
      <tr key={p.racer}>
      <td>{idx + 1}</td>
      <td>{p.racer}</td>
      <td>{p.position}</td>
      <td data-idx={idx} onClick={this.handleDeletePosition}>x</td>
      </tr>
    ));

    return (
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
    );
  }
}
