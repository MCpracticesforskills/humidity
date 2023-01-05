import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        This project is{" "}
        <a
          href="https://github.com/MCpracticesforskills/humidity"
          target="_blank"
          rel="noopener noreferrer"
        >
          open sourced on GitHub
        </a>{" "}
        by{" "}
        <a
          href="https://endearing-pika-93dc27.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Morgan Coyle
        </a>
      </footer>
    </div>
  );
}

export default App;
