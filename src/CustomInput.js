import React from "react";

const CustomInput = ({ ref }) => {
  return (
    <input
      type="text"
      ref={ref}
      placeholder="Enter text here"
      style={{ height: "25px" }}
    />
  );
};

export default CustomInput;
