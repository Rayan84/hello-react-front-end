import React from 'react';
import { useSelector } from 'react-redux';

const Greetings = () => {
  const greeting = useSelector((state) => state.greetings);
  return (
    <div>
      <h1>{ greeting.msg }</h1>
    </div>
  );
};

export default Greetings;
