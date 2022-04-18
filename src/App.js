import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactComponent from "./Components/reactcomponent.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Jago",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>

          <button
            onClick={() => {
              this.setState({ name: "Andrei" });
            }}
          >
            Change name
          </button>

          <ReactComponent />
        </header>
      </div>
    );
  }
}

export default App;
