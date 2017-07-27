import React from 'react';
import NavMenu from './NavMenu';
import NavLogo from './NavLogo';
import SearchBar from './SearchBar';
import DisplayPicture from '../shared/DisplayPicture';
import Button from '../shared/Button';

class Nav extends React.Component {
  render() {
    return (
      <nav className='nav-wrapper'>
        <div className='nav-left'>
          <NavMenu/>
        </div>

        <NavLogo/>

        <div className='nav-right'>
          <SearchBar/>
          <DisplayPicture size='small' dpImage={this.props.dpImage}/>
          <Button text='tweet'/>
        </div>
      </nav>
    )
  }
}

export default Nav;
