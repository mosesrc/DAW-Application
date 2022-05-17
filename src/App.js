import logo from "./logo.svg";
import "./App.css";
import StartRecording from "./StartRecording/StartRecording-component";
import Region from "./Region/region-component";

function App() {
  return (
    <div>
      <h1>Daw System with React</h1>
      <Region></Region>
      <StartRecording></StartRecording>
    </div>
  );
}

export default App;
