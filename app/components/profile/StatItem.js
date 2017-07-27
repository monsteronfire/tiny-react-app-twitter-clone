import React from 'react';

class StatItem extends React.Component {
  render() {
    return (
      <div className='stat-item-wrapper'>
        <p className='stat-item-label'>{this.props.label}</p>
        <p className='stat-item-count'>{this.props.count}</p>
      </div>
    )
  }
}

export default StatItem;
