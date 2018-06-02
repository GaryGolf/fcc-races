import * as React from 'react';

interface Props {
  racers: string[];
  onSubmit: (position: iPosition) => void;
}

interface State {
  racer: string;
  position: number;
}

export default class AddRacerForm extends React.Component<Props, State> {

  public constructor(props:Props) {
    super(props);

    this.state = {
      racer: props.racers[0],
      position: 1
    }
  }

  public componentWillReceiveProps(nextProps) {
    const { racers } = nextProps;
    if (this.props.racers != racers && !!racers.length) this.setState({ racer: racers[0] });
  }

  private handlePositionChange = (event:React.FormEvent<HTMLInputElement>) => {
    const position = parseInt(event.currentTarget.value);
    this.setState({ position });
  }

  private handleRacerChange = (event:React.FocusEvent<HTMLSelectElement>) => {
    const racer = event.currentTarget.value;
    this.setState({ racer });
  }

  private handleNewRecordSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
      const { racer, position } = this.state;
      this.props.onSubmit({ racer, position });
  }

  render() {
    const { racer, position } = this.state;
    const { racers } = this.props;

    if (!racers || !racers.length) return null;

    const options = racers.map((name, idx) => (
      <option key={name} value={name}>{name}</option>
    ));
    return (
      <div>
        <select 
          onChange={this.handleRacerChange}
          value={racer}>
          {options}
        </select>
        <input type="number"
          onChange={this.handlePositionChange}
          value={position}
        />
        <button onClick={this.handleNewRecordSubmit}>+ Add</button>
      </div>
    );
  }
}
