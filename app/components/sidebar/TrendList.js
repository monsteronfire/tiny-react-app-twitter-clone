import React from 'react';

class TrendList extends React.Component {
  render() {
    return (
      <div className='trend-list-wrapper'>
        <h3>Trends for you</h3>
        <ul>
          <li>
            <p>#hashtag</p>
            <p>8964K Tweets</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default TrendList;
