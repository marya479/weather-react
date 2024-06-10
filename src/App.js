import logo from './logo.svg';
import './App.css';
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Turnhout" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/marta-lucja-weglinska-761603211/"
            target="_blank"
            rel="noreferrer"
          >
            Marta Lucja,
          </a>{" "}
          open-sourced on{" "}
          <a
            href="https://github.com/marya479/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://fantastic-daifuku-ca2dd0.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}