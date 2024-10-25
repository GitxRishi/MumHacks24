import React from 'react';
import Typed from 'react-typed';
const Typing_hero = () => {
  return (
    <div>
    <h1>
      <Typed
        strings={['Welcome to Data 101.']}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </h1>
  </div>
  )
}

export default Typing_hero;
