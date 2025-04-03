import React, { useRef } from 'react';

function UnControlled() {
  const inputRef = useRef();

  const show = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <h1>UnControlled Component</h1>
      <input type='text' ref={inputRef} />
      <button onClick={show}>Show Value</button>
    </>
  );
}

export default UnControlled;