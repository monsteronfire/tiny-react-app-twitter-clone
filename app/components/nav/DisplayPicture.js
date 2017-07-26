import React from 'react';

function DisplayPicture (props) {
  return (
    <div className='display-picture-wrapper'>
      <img src={props.image.url} className='dp dp-small' />
    </div>
  )
}

export default DisplayPicture;
