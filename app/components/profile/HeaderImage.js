import React from 'react';

function HeaderImage(props) {
  return (
    <div className='header-image-wrapper'>
      <img src={props.header.url} />
    </div>
  )
}

export default HeaderImage;
