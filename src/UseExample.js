import { use, Suspense } from "react";
import { messagePromise } from "./action";
import { ThemeContext } from "./ThemeContext";

// use is a React API that lets you read the value of a resource like a Promise or context.
function Message({ messagePromise }) {
  const messageContent = use(messagePromise);
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <>
      <p>Here is the message: {messageContent}</p>
      <h1>theme is {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}

export function UseExample() {
  return (
    <Suspense fallback={<p>⌛Fetching message...</p>}>
      <Message messagePromise={messagePromise()} />
    </Suspense>
  );
}
