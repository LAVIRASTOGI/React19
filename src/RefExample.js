import React, { useRef } from "react";
import CustomInput from "./CustomInput";

function RefExample() {
  const refInput = useRef(0);

  const focusInput = () => {
    console.log(refInput);
    if (refInput.current) {
      refInput.current.focus(); // Focuses the input
    }
  };

  return (
    <>
      <h1>useRef Example</h1>
      <CustomInput ref={refInput} />
      <button
        onClick={focusInput}
        style={{ height: "30px", marginLeft: "10px" }}
      >
        Focus
      </button>
    </>
  );
}

export default RefExample;
