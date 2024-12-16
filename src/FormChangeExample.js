import React from "react";
import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return <button>{pending ? "Submitting..." : "Submit"}</button>;
}

function FormChangeExample() {
  const submitHandler = async (formData) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        let name = formData.get("name");
        let email = formData.get("email");
        console.log("Form submitted", name, email);
        resolve("data");
      }, 3000);
    });
  };
  return (
    <>
      <form action={submitHandler}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <Submit />
      </form>
    </>
  );
}

export default FormChangeExample;
