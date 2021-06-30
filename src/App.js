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
        <Dictionary defaultKeyword="sunset"/> 
      </main>
      <footer className="App-footer">
        <small> 
        This project was coded by <a href="https://www.linkedin.com/in/fernanda-schmitt-b4a3b733/" >Fernanda Schmitt </a> and is <a href="https://github.com/fezita/dictionary-project">open-sourced on Github</a> and hosted on <a href="https://www.netlify.com/">Netlify.</a>
        </small>
      </footer>
      </div>
    </div>
  );
}

