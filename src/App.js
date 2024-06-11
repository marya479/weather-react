import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Turnhout" />

        <footer>
          This project was coded by Marta Lucja
          <a
            href="https://www.linkedin.com/in/marta-lucja-weglinska-761603211/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matt Delac
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/marya479/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://fantastic-daifuku-ca2dd0.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
