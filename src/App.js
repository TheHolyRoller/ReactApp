import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { Button } from "./components/Button";

//PERSONAL ACCESS TOKEN
//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


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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
