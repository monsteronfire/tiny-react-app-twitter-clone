import React from 'react';

const image = {
  url: 'app/images/profile-picture.jpg'
};

function DisplayPicture () {
  return (
    <div className='display-picture-wrapper'>
      <img src={image.url} className='dp dp-small' />
    </div>
  )
}

export default DisplayPicture;
