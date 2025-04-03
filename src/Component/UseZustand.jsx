import React from 'react';

import Zustand from './Zustand';



function UseZustand() {

  const { count, increase, decrease } = Zustand();



  return (

    <div>

      <h1>Count: {count}</h1>

      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>

    </div>

  );

}



export default UseZustand;