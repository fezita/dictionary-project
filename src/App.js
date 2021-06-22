import React from "react";
import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"/>
      </header>
      <main>
        <Dictionary /> 
      </main>
      <footer className="App-footer">
        <small> 
        Coded by <a href="https://www.linkedin.com/in/fernanda-schmitt-b4a3b733/" >Fernanda Schmitt </a>
        </small>
      </footer>
      </div>
    </div>
  );
}

