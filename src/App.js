import FormChangeExample from "./FormChangeExample";
import "./App.css";
import ContextAPIExample from "./ContextAPIExample";
import DefferedValueExample from "./DefferedValueExample";
import RefExample from "./RefExample";
import { ThemeProvider } from "./ThemeContext";

import Counter from "./UseOptimisticExample";
import UseActionStateExample from "./UseActionStateExample";
import { UseExample } from "./UseExample";

function App() {
  return (
    <ThemeProvider>
      <title>React 19 application</title>
      <div className="App">
        {/* ref */}
        <h1>React Ref Example</h1>
        <RefExample />
        {/* context API */}
        <h1>React Context API Example</h1>
        <ContextAPIExample />
        {/* defferedValueexample */}
        <DefferedValueExample />
        <h1>New hook</h1>
        {/* action and useFormSatus */}
        <h1>Form Example</h1>
        <FormChangeExample />
        {/* useOptimistic */}
        <Counter />

        {/* useActionState */}
        <UseActionStateExample />
        <h1>use</h1>
        {/* use */}
        <UseExample />
      </div>
    </ThemeProvider>
  );
}

export default App;
