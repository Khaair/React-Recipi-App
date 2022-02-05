import React from 'react';


 function Recipi({recipe}) {
  return(
    <div className='container mt-5'>
        <img alt='Recipii' src={recipe["recipe"]["image"]}/>
        <p>{recipe["recipe"]["label"]}</p>
    </div>

  )
}
export default Recipi