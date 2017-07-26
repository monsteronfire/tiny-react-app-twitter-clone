import React from 'react';

function NavMenu () {
  return (
    <ul className='menu-list'>
      <li>
        <i className="fa fa-home"></i>
        Home
      </li>
      <li>
        <i className="fa fa-bell"></i>
        Notifications
      </li>
      <li>
        <i className="fa fa-envelope"></i>
        Messages
      </li>
    </ul>
  )
}

export default NavMenu;
