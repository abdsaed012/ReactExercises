import React, { useReducer } from "react";
import { CounterReducer } from "./CounterReducer";  
import DoubleCounter from "./DoubleCounter";

const App = () => {
  const [state, dispatch] = useReducer(CounterReducer, { counterA: 0, counterB: 0 });

  return (
    <div>
      <h1>Exercise 13: useReducer with Multiple Counters</h1>
      <DoubleCounter state={state} dispatch={dispatch} />
      
    </div>
  );
};

export default App;
