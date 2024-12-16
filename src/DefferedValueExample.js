import React, { useState, useMemo, useDeferredValue } from "react";

const ExpensiveList = ({ items }) => {
  // Simulate expensive rendering with useMemo
  const renderedItems = useMemo(() => {
    console.log("Rendering expensive list...");
    return items.map((item, index) => (
      <div
        key={index}
        style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
      >
        {item}
      </div>
    ));
  }, [items]);

  return <div>{renderedItems}</div>;
};

const DefferedValueExample = () => {
  const [input, setInput] = useState(""); // Input state
  const deferredQuery = useDeferredValue(input, "abv"); // Deferred input state

  // Generate a large list based on deferredQuery
  const items = useMemo(() => {
    console.log("Generating items...");
    return Array(10000)
      .fill()
      .map((_, i) => `Item ${i + 1} - ${deferredQuery}`);
  }, [deferredQuery]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useDeferredValue Example</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type to search..."
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      />
      <ExpensiveList items={items} />
    </div>
  );
};

export default DefferedValueExample;
