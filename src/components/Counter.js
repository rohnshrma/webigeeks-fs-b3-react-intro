import React, { useState } from "react";

const Counter = () => {
  console.log("counter running");

  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    var newVal = count + 1;
    setCount(newVal);
  };
  const decrementHandler = () => {
    var newVal = count - 1;
    setCount(newVal);
  };
  const increaseHandler = () => {
    var newVal = count + 50;
    setCount(newVal);
  };

  console.log(count);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase by 50</button>
    </div>
  );
};

export default Counter;
