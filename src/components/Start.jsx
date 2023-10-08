import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.value && setUsername(inputRef.current.value);
  }

  return (
    <div className="start">
      <input
        type="text"
        placeholder="enter your name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
