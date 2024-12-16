import FormChangeExample from "./FormChangeExample";
import "./App.css";
import ContextAPIExample from "./ContextAPIExample";
import DefferedValueExample from "./DefferedValueExample";
import RefExample from "./RefExample";
import { ThemeProvider } from "./ThemeContext";

import Counter from "./UseOptimisticExample";

function App() {
  return (
    <ThemeProvider>
      <title>React 19 application</title>
      <div className="App">
        {/* ref */}

        {/* useOptimistic */}
        <Counter />
      </div>
    </ThemeProvider>
  );
}

export default App;
