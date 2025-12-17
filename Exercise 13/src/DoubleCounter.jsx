
import React, { useReducer } from 'react';
import { CounterReducer, initialState } from './CounterReducer';

const DoubleCounter = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  return (
    <div>
      <h2>Double Counter</h2>

      
      <div>
        <h3>Counter A: {state.counterA}</h3>
        <button onClick={() => dispatch({ type: 'DECREMENT_A' })} disabled={state.counterA === 0}>
          - A
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT_A' })}>+ A</button>
      </div>

      
      <div>
        <h3>Counter B: {state.counterB}</h3>
        <button onClick={() => dispatch({ type: 'DECREMENT_B' })} disabled={state.counterB === 0}>
          - B
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT_B' })}>+ B</button>
      </div>

      
      <div>
        <button onClick={() => dispatch({ type: 'RESET_ALL' })}>Reset Both</button>
      </div>
    </div>
  );
};

export default DoubleCounter;
