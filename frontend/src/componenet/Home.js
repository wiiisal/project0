import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'



 export default function Home() {

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);
            // const response =  fetch('http://localhost:3002/api/getvideos');
            // const data =  response.json();
            // this.setState({ videos: [...data] });
            
    
  
   
        return (
            <>
            <div>
                <div>
                
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
                   
                </div>
            </div>
            </>
        )
    }