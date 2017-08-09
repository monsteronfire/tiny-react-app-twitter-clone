import React from 'react';

class TrendItem extends React.Component {
  render() {
    return (
      <div className='trend-item-wrapper'>
        <p className='trending-hashtag'>#hashtag</p>
        <p className='trending-count'>8648K tweets</p>
      </div>
    )
  }
}

export default TrendItem;
