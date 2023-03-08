import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';
import JoinRoom from '../JoinRoom'
import Room from '../Room';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

 export default function Home() {

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
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);
            // const response =  fetch('http://localhost:3002/api/getvideos');
            // const data =  response.json();
            // this.setState({ videos: [...data] });
            
    
    const isConnected = useHMSStore(selectIsConnectedToRoom)
   
        return (
            <>
            <div className={`App App-header ${theme}`}>
             <button onClick={toggleTheme}>Toggle Theme</button>
                <div className="container">
                <BottomNavigation sx={{ width: "100%" }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<OndemandVideoIcon color="success" />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon onClick={toggleTheme} />}
      />
      <BottomNavigationAction
        label="Live TV"
        value="live TV"
        icon={<LiveTvIcon />}
      />
      <BottomNavigationAction label="Logout" value="logout" icon={<PowerSettingsNewIcon color='secondary'/>} />
    </BottomNavigation>
                    {/* <div className="row">
                    <ReactPlayer className='video'  url={[ 'https://youtu.be/1fx--d0ErNk' ]}
                         playing
                         muted
                         loop
                         controls
                         light
                         volume={0.5}
                         playIcon
                         onReady
                         onPause
                         onStart
                         onPlay
                         onDuration  />
                    </div> */}
                    <div>
                    {isConnected ? <Room />: <JoinRoom />}
                    </div>
                </div>
            </div>
            </>
        )
    }