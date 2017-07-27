import React from 'react';
import StatItem from './StatItem';

class StatCounter extends React.Component {
  render() {
    return (
      <div className='stat-counter-wrapper'>
        <StatItem label='tweets' count='60' />
        <StatItem label='following' count='175' />
        <StatItem label='followers' count='19' />
        <StatItem label='likes' count='1,759' />
        <StatItem label='moments' count='0' />
      </div>
    )
  }
}

export default StatCounter;
