import React from 'react';

function DisplayPicture (props) {
  return (
    <div className='display-picture-wrapper'>
      <img src={props.dpImage.url} className={'dp dp-'+ props.size} />
    </div>
  )
}

export default DisplayPicture;
