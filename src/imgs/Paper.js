import React from 'react';
import papericon from './icon-paper.svg';

const Paper = ({handleClick}) => {
  return (
    <div className="Paper">
      <button onClick={handleClick}>
        <img src={papericon} alt="Paper"/>
      </button>
    </div>
  )
}
export default Paper;