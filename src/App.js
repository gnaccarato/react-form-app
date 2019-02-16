import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import {UserForm} from "./components/UserForm";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
