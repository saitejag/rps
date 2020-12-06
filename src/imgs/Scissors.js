import React from 'react';
import scissorsicon from './icon-scissors.svg';

const Scissors = ({handleClick}) => {
  return (
    <div className="Scissors">
      <button onClick={handleClick}>
        <img src={scissorsicon} alt="Scissors"/>
      </button>
    </div>
  )
}
export default Scissors;