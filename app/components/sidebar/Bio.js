import React from 'react';

class Bio extends React.Component {
  render() {
    return (
      <div className='bio-wrapper'>
        <h2>{this.props.profile.name}</h2>
        <h4>{this.props.profile.handle}</h4>
        <p>{this.props.profile.bio}</p>
      </div>
    )
  }
}

export default Bio;
