import { useEffect, useState } from "react";

const TimeCountDown = () => {
  const [time, setTime] = useState(0);
  const [befCountdown,setBefCountdown] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
  let timerHolder;

  if (isRunning) {
    timerHolder = setInterval(() => {
      if (time > 0) {
        setTime((prev) => prev - 1);
      } else {
        clearInterval(timerHolder); 
      }
    }, 1000);
  }

  return () => clearInterval(timerHolder);
}, [isRunning, time]); 

  

  const handleTime = (e) => {
    console.log(e.target.value);
    setBefCountdown(e.target.value);
    setTime(e.target.value);
  };

  const handleStart = () => {
    if(time >= 1)
    setIsRunning(true);
  };

  const handleStop = ()=>{
    setIsRunning(false)
  }
  const handleReset = ()=>{
    setIsRunning(false);
    setTime(befCountdown)

  }

  return (
    <div>
      <h1>Countdown timer</h1>
      <h2>
        Set time in (seconds):
        <input type="number" onChange={handleTime} />
      </h2>
      <h2>Time left {time} Seconds</h2>
      <button disabled={isRunning} onClick={handleStart}>start</button>
      <button  disabled={!isRunning} onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default TimeCountDown;
