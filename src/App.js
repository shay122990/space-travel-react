import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Technology from './pages/technology/Technology'

function App() {
  return (
    <div className="App">
      <Router basename="/space-travel-react">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
