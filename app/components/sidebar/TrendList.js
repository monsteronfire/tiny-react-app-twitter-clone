import React from 'react';
import TrendItem from './TrendItem';

class TrendList extends React.Component {
  render() {
    return (
      <div className='trend-list-wrapper'>
        <h3>Trends for you</h3>
        <ul>
          <li>
            <TrendItem/>
          </li>
        </ul>
      </div>
    )
  }
}

export default TrendList;
