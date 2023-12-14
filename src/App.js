import TestComponent from "./components/TestComponent"
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import MainBody from './components/MainBody'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="body">
        <LeftSidebar/>
        <MainBody/>
        <RightSidebar/>
      </div>
    </div>
  );
}

export default App;
