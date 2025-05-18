import { useState } from 'react';

export function Counter() {
  // let counter = 0;

  let [counter, setCount] = useState(0);

  function setInitVal() {
    return 100;
  }

  let [count100, setCount100] = useState(setInitVal);

  // console.log(useState('initial val')); // returns an array [paramVal, function()] // that's why you need to destructure at line 6

  function increase() {
    console.log(counter++);
    // setCount(counter + 1);
    // setCount(counter + 1);
    // setCount(counter + 1); // no matter how many times you call initial value will be zero only and +1 operation will only implemented

    // to fix that we need to make a anonymous function call
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function decrease() {
    console.log(counter--);
    setCount(counter--);
  }

  return (
    <>
      <h1>Counter Application</h1>
      <p>
        count : {counter} {count100}
      </p>
      <button className="btn btn-sm btn-primary" onClick={increase}>
        Plus
      </button>
      <button className="btn btn-sm btn-danger" onClick={decrease}>
        Minus
      </button>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => {
          setCount100(count100 + 100);
        }}
      >
        Plus100
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          setCount100(count100 - 25);
        }}
      >
        Minus25
      </button>
    </>
  );
}
