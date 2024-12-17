import { use, Suspense } from "react";
import { messagePromise } from "./action";

function Message({ messagePromise }) {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
}

export function UseExample() {
  return (
    <Suspense fallback={<p>⌛Fetching message...</p>}>
      <Message messagePromise={messagePromise()} />
    </Suspense>
  );
}
