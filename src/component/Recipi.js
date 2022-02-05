import React from 'react';
import "../App.css";


 function Recipi({recipe}) {
  return(
    <div className='item'>
        <img alt='Recipii' src={recipe["recipe"]["image"]}/>
        <p>{recipe["recipe"]["label"]}</p>
    </div>

  )
}
export default Recipi