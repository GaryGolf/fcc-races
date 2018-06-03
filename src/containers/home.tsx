import * as React from 'react';
import { Link } from 'react-router-dom';
import * as css from './home.css';

interface Props {};

export default class HomePage extends React.PureComponent<Props, null> {
  render() {
    return (
      <div className={css.container}>
        <h2> Races start</h2>
        <ul>
          <li><Link to="/racers"> Racers </Link></li>
          <li><Link to="/new-race"> New Race </Link></li>
          <li><Link to="/races"> Races Table </Link></li>
        </ul>
      </div>
    )
  }
}
