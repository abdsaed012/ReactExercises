
import { useState } from "react";

const ToggleButton = () => {
  const [change, setChange] = useState(true);

  const Toggle = () => {
    setChange(!change);
  };

  return (
    <>
      <p>The light is {change ? "on" : "off"}</p>
      <button onClick={Toggle}>Turn {change ? "off" : "on"}</button>
    </>
  );
}

export default ToggleButton