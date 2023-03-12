import "./App.css";
import Composition from "./components/2-4.Props/Component";
import Extraction from "./components/2-4.Props/Extraction/Extraction";
import ClassComponent from "./components/2-5.State/ClassComponent";
import FuntionalComponent from "./components/2-5.State/FuntionalComponent";
import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent2";
import Event from "./components/2-7.Event/Event";
import Condition from "./components/2-8.ConditionalRendering/Condition";
import List from "./components/2-9.List/List";

function App() {
  return (
    <div className="App">
      <Composition />
      <Extraction />
      <ClassComponent />
      <ClassComponent2 />
      <FuntionalComponent />
      <Event />
      <Condition />
      <List />
    </div>
  );
}

export default App;
