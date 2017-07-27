import React from 'react';
import StatCounter from './StatCounter';
import Button from '../shared/Button';

class StatBar extends React.Component {
  render() {
    return (
      <div className='stat-bar-wrapper'>
        <StatCounter/>
        <Button text='edit'/>
      </div>
    )
  }
}

export default StatBar;
