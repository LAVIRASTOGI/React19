import { useOptimistic, useState, useRef } from "react";

async function updateTodoAPP(message) {
  await new Promise((res) => setTimeout(res, 4000));
  return message;
}
function TaskList({ tasks, sendTask }) {
  const formRef = useRef();
  async function formAction(formData) {
    addOptimisticMessage(formData.get("task"));
    formRef.current.reset();
    await sendTask(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    tasks,
    (state, newTask) => [
      ...state,
      {
        text: newTask,
      },
    ]
  );

  return (
    <>
      <form action={formAction} ref={formRef}>
        <input type="text" name="task" placeholder="Enter task" />
        <button type="submit">Submit</button>
      </form>
      {optimisticMessages.map((task, index) => (
        <div key={index}>{task.text}</div>
      ))}
    </>
  );
}

export default function Counter() {
  const [todoApp, setTodoAPP] = useState([{ text: "Hello Complete JS!" }]);
  async function sendTask(formData) {
    const updatedTask = await updateTodoAPP(formData.get("task"));
    setTodoAPP(() => [...todoApp, { text: updatedTask }]);
  }
  return <TaskList tasks={todoApp} sendTask={sendTask} />;
}
