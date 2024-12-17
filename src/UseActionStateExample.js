import React, { useActionState } from "react";

function UseActionStateExample() {
  const [data, formAction, pending] = useActionState(saveData, null);

  return (
    <>
      <form action={formAction}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <br />
        <button>{pending ? "Loading..." : "Submit"}</button>
      </form>

      {data?.message && <p style={{ color: "green" }}>{data.message}</p>}
      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
    </>
  );
}

async function saveData(prevState, formData) {
  let inputData = {
    name: formData.get("name"),
    email: formData.get("email"),
  };
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (inputData.name === "Lavi") {
    return {
      error: "Name cannot be Lavi",
      result: null,
    };
  }
  return {
    message: "Data saved successfully",
    result: inputData,
  };
}
export default UseActionStateExample;
