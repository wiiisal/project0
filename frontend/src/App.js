import './App.css';

import {BrowserRouter as Router,Routes ,Route, Link}from 'react-router-dom'
import Home from './componenet/Home';
import Player from './componenet/Player';
import Login from './componenet/Login';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('recents');
    const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    <div className={`App  ${theme}`} >
      <Router>
        
      <BottomNavigation sx={{ width: "100%" }} value={value} onChange={handleChange}>
        <Link to={'/home'}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<OndemandVideoIcon color="success" />}
      />
      </Link>
      <Link to={'/liveTv'}>
      <BottomNavigationAction
        label="Live TV"
        value="live TV"
        icon={<LiveTvIcon />}
      />
      </Link >
      <Link to={'/login'}>
      <BottomNavigationAction label="Logout" value="logout" icon={<PowerSettingsNewIcon color='secondary'/>} />
      </Link>
    </BottomNavigation>
    
            <Routes>
              <Route exact path='/login' element={<Login/>}></Route>
              <Route exact path="/home" element={<Home/>}></Route>
              <Route  exact path="/liveTv" element={<Player/>}></Route>
              </Routes>
        </Router>
    </div>
  );
}

export default App;
