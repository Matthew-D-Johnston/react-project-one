import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

import SideBar from './components/SideBar';
import Homes from './components/Homes';
import Lots from './components/Lots';

function App() {

  return (
    <Router>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/homes/*" element={<Homes />} />
          <Route path="/lots" element ={<Lots />} />
        </Routes>
      </div> 
    </Router> 
  );
}

export default App;
