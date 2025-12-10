import { useState } from "react";

const Buttons = () => {
  const [count, setCount] = useState(0);

  const handleIncrement =()=>{
    setCount(count + 1)
  }

  const handleDecerement =()=>{
    if(count>0){
        setCount(count -1)
    }
  }

  return (
    <div>
      <h1>Total count is {count}</h1>
      
        <button onClick={handleIncrement}> Increment</button>
        <button onClick={handleDecerement} disabled={count === 0}> Decerement</button>
     
    </div>
  );
};

export default Buttons;
