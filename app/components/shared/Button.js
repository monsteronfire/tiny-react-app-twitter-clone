import React from 'react';

function Button (props) {
  return (
    <div className='button-wrapper'>
      <button className={'btn-' + props.text}>{props.text}</button>
    </div>
  )
}

export default Button;
