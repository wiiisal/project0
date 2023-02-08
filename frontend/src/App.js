import './App.css';
import {BrowserRouter as Router,Routes ,Route}from 'react-router-dom'
import Home from './Home';
import Player from './Player';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route  exact path="/player/:id" element={<Player/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
