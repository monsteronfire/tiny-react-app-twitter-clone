import React from 'react';
import HeaderImage from './HeaderImage';
import DisplayPicture from '../shared/DisplayPicture';
import StatBar from './StatBar';

class Profile extends React.Component {
  render() {
    return (
      <div className='profile-wrapper'>
        <HeaderImage header={this.props.header} />
        <div className='row'>
          <DisplayPicture size='large' dpImage={this.props.dpImage}/>
        </div>
        <StatBar/>
      </div>
    )
  }
}

export default Profile;
