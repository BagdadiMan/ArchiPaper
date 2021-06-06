import { useState } from "react";
import "./App.css";
import Main from "./Pages/Main/Main.js";
import Content from "./Components/Content/Content.js";

function App() {
  const [contentRoute, setContentRoute] = useState();

  return (
    <div className="App">
      <Main setContent={setContentRoute}></Main>
      <Content contentRoute={contentRoute}></Content>
    </div>
  );
}

export default App;
