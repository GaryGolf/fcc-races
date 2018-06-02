import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import NewRaceForm from '../components/new-race-form';
import RaceResultsForm from '../components/race-results-form';
import AddRacerForm from '../components/add-racer-form';
import { 
  createNewRace, addPosition, removePosition, submitPositions, clearForm
} from '../store/actions';
import { 
  getLastRaceNum, getLastRacePositions, getInactiveRacers
} from '../store/selectors';


const { connect } = require('react-redux');
const { withRouter } = require('react-router-dom')

interface InjectedHistory {
  push: (path:string) => void;
}

interface Actions {
  createNewRace?: (num: number, city:string) => void;
  addPosition?: (position: iPosition) => void;
  removePosition?: (position: iPosition) => void;
  submitPositions?: (num: number, positions:iPosition[]) => void;
  clearForm?: () => void;
}

interface Props {
  num: number;
  races: iRace[];
  racers: string[];
  positions: iPosition[];
  actions: Actions;
  dispatch: Dispatch<AppStore>;
  history: InjectedHistory;
}

interface State {
  isRaceReady: boolean;
}

@withRouter
@connect(
  (store:AppStore) => ({
    races: store.races,
    racers: getInactiveRacers(store),
    num: getLastRaceNum(store),
    positions: store.form
  }),
  (dispatch: Dispatch<AppStore>) => ({ 
    actions: bindActionCreators({ 
      createNewRace, addPosition, removePosition, submitPositions, clearForm
    }, dispatch),
  })
)
export default class CreateRacePage extends React.Component<Props, State> {

  constructor(props:Props) {
    super(props)
    this.state = {
      isRaceReady: false
    }
  }

  private handleNewRaceSubmit = (city: string) => {
    const { num, actions } = this.props;
    actions.createNewRace(num + 1, city)
    this.setState({ isRaceReady: true });
  }

  private handleSubmitPositions = () => {
    const {num, positions, actions, history} = this.props;
    actions.submitPositions(num, positions);
    actions.clearForm();
    history.push('/');
  }
  
  render() {
    const { isRaceReady } = this.state;
    const { num, racers, positions, actions } = this.props;

    console.log(this.props)
    return (
      <div>
        <h3> Create new Race </h3>
        { !isRaceReady ? (
            <NewRaceForm 
              onSubmit={this.handleNewRaceSubmit} 
            />
          ) : (
            <div>
              <RaceResultsForm 
                num={num}
                positions={positions}
                onDelete={actions.removePosition}
              />
              <AddRacerForm
                racers={racers}
                onSubmit={actions.addPosition}
              />
              <button 
                disabled={!positions || !positions.length}
                onClick={this.handleSubmitPositions}>
                Submit
              </button>
            </div>
          )
        }
      </div>
    )
  }
}