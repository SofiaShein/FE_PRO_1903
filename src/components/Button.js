import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log('I am here');
    setCount(count + 1);
  }

  return <button onClick={ handleClick }>{count} clicks</button>
}

export default Button;