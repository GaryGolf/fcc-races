import * as React from 'react';

interface Props {
  defaultValue?: string
  onSubmit:(city:string)=>void;
}

interface State {
  city: string;
}

export default class RaceForm extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    const city = props.defaultValue || '';
    this.state = { city };
  }

  private handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const city = event.currentTarget.value;
    this.setState({ city });
  }

  private handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    switch(event.key) {
      case 'Enter' :
        event.preventDefault();
        this.props.onSubmit(this.state.city);
        break;
      case 'Escape' :
        this.setState({ city: '' })
      default:
        break
    }
  }

  private handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSubmit(this.state.city);
  }

  render() {
    const value = this.state.city
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="city"
          value={this.state.city}
          placeholder="city name"
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
