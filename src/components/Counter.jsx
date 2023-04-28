import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    if (count === 0) return;
    setCount(count - 1);
  }
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increaseCounter}>Increment</button>
      <button onClick={decreaseCounter}>Decreament</button>
    </div>
  );
}

export default Counter;
