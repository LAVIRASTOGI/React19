import FormChangeExample from "./FormChangeExample";
import "./App.css";
import ContextAPIExample from "./ContextAPIExample";
import DefferedValueExample from "./DefferedValueExample";
import RefExample from "./RefExample";
import { ThemeProvider } from "./ThemeContext";

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
        {/* useTransition */}
      </div>
    </ThemeProvider>
  );
}

export default App;
