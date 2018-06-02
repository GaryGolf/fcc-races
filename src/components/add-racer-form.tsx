import * as React from 'react';

interface Props {
  racers: string[];
  onSubmit: (name: string, position: number) => void;
}

interface State {
  name: string;
  position: number;
}

export default class AddRacerForm extends React.PureComponent<Props, State> {

  constructor(props:Props) {
    super(props);

    this.state = {
      name: props.racers[0],
      position: 1
    }
  }

  private handlePositionChange = (event:React.FormEvent<HTMLInputElement>) => {
    const position = parseInt(event.currentTarget.value);
    this.setState({ position });
  }

  private handleRacerChange = (event:React.FocusEvent<HTMLSelectElement>) => {
    const name = event.currentTarget.value;
    this.setState({ name });
  }

  private handleNewRecordSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
      const { name, position } = this.state;
      this.props.onSubmit(name, position);
  }

  render() {
    const { name, position } = this.state;
    const { racers } = this.props;

    if (!racers || !racers.length) return null;

    const options = racers.map((racer, idx) => (
    <option key={racer} value={racer} {...{selected: !idx}}>{racer}</option>
    ));
    return (
      <div>
        <select onChange={this.handleRacerChange}>
          {options}
        </select>
        <input type="number"
          onChange={this.handlePositionChange}
          value={position}
        />
        <button onClick={this.handleNewRecordSubmit}>Submit</button>
      </div>
    );
  }
}
