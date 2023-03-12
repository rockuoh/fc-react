import "./App.css";
import Composition from "./components/2-4.Props/Component";
import Extraction from "./components/2-4.Props/Extraction/Extraction";
import ClassComponent from "./components/2-5.State/ClassComponent";
import FuntionalComponent from "./components/2-5.State/FuntionalComponent";

function App() {
  return (
    <div className="App">
      <Composition />
      <Extraction />
      <ClassComponent />
      <FuntionalComponent />
    </div>
  );
}

export default App;
