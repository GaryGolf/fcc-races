import * as React from 'react';
import * as css from './home.css';

interface Props {};

export default class HomePage extends React.PureComponent<Props, null> {
  render() {
    return (
      <div className={css.container}>
        <h2> Races start</h2>
      </div>
    )
  }
}
