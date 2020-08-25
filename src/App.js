import React from "react";
import "./App.css";
import Calculator from "./containers/Calculator";
import InterestProvider from "./context/interest-context";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InterestProvider>
          <Calculator />
        </InterestProvider>
      </header>
    </div>
  );
}

export default App;
