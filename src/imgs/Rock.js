import React from 'react';
import rockicon from './icon-rock.svg';

const Rock = ({handleClick}) => {
  return (
    <div className="Rock">
      <button onClick={handleClick}>
        <img src={rockicon} alt="Rock"/>
      </button>
    </div>
  )
}
export default Rock;