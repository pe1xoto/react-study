import { useState } from "react";
import viteLogo from "/vite.svg";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstComponent />
      <h1>Fundamentals React</h1>
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </>
  );
}

export default App;
