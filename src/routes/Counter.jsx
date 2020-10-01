import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1);

  return (
    <>
      <p>Counter: {counter}</p>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={increment}
          onChange={(e) => setIncrement(parseInt(e.target.value))}
        ></input>
      </div>
      <button
        className="btn btn-primary mr-1"
        onClick={() => setCounter((prevCounter) => prevCounter + increment)}
      >
        Increment
      </button>
      <button className="btn btn-warning" onClick={() => setCounter(0)}>
        Reset counter
      </button>
    </>
  );
};
