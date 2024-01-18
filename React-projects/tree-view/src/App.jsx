import menus from "./components/treeView/data.js";
import './App.css'
import TreeView from "./components/treeView/index.jsx";

function App() {

  return (
    <div>
      {/*Rendering the TreeView component */}
      <TreeView menus={ menus }/>
    </div>
  )
}

export default App
