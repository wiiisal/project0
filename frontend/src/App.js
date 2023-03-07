import './App.css';

import {BrowserRouter as Router,Routes ,Route}from 'react-router-dom'
import Home from './componenet/Home';
import Player from './componenet/Player';
import Login from './componenet/Login';

function App() {

  return (
    <div className="App" >
      <Router>
            <Routes>
              <Route exact path='/' element={<Login/>}></Route>
              <Route exact path="/home" element={<Home/>}></Route>
              <Route  exact path="/player/:id" element={<Player/>}></Route>
              </Routes>
        </Router>
    </div>
  );
}

export default App;
