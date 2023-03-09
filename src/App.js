import "./App.css";
import Hello from "./components/Hello/Hello";
import Hobby from "./components/Hobby/Hobby";

function App() {
  return (
    <div className="App">
      <h1>Приветствие</h1>      
      <Hello name="Timka" age="16"/>
      <Hobby hobby="Student"/>    
      <Hello name="Kenan" age="20"/>
      <Hobby hobby="Support"/>
      <Hello name="Arsen"  age="20"/>
      <Hobby hobby="mentor"/>
    </div>
  );
}

export default App;
