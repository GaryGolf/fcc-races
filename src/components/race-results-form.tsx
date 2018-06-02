import * as React from 'react';

interface Props {
  num: number;
  racers: iRacer[];
  positions:iPosition[];
}

interface State {
  isRacerForm: boolean;
}

export default class RaceResultsForm extends React.PureComponent<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      isRacerForm: false
    }
  }
  private handleFormSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  private handleNewRacerClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({ isRacerForm: true });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleNewRacerClick}>Add racer</button>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    )
  }

}


const AddRacerForm:React.SFC<{racers:string[]}> = props => {
  return (
    <div>
      Form;
    </div>
  )
}