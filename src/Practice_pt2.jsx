import React, { useEffect, useState } from "react";
import Car from "./components/Car";

const App = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCalculation(() => count ** 2);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      <p>Number: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Square of Number: {calculation}</p>
    </>
  );
};

export default App;
