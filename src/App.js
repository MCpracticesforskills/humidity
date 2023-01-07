import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Conditions.css";
import Conditions from "./Conditions";

function App() {
  return (
    <div className="App">
      <Conditions />
      <Weather />

      <footer>
        This project is{" "}
        <a
          href="https://github.com/MCpracticesforskills/humidity"
          target="_blank"
          rel="noopener noreferrer"
          title="repository on GitHub"
        >
          open sourced on GitHub
        </a>{" "}
        by{" "}
        <a
          href="https://endearing-pika-93dc27.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Morgan's website & portfolio"
        >
          Morgan Coyle
        </a>
      </footer>
    </div>
  );
}

export default App;
