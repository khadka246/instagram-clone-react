import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import MainBody from './components/MainBody'
import './App.css'


function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="layout">
          <LeftSidebar/>
          <MainBody/>
          <RightSidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
