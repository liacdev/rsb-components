import logo from "./logo.svg";
import "./App.css";
import Component from "./Components/components.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-components"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <Component />
      </header>
    </div>
  );
}

export default App;
