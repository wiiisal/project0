import React from 'react'
import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';
import JoinRoom from '../JoinRoom'
import Room from '../Room';

export default function Player() {
    const isConnected = useHMSStore(selectIsConnectedToRoom)
  return (
    <div>
       <div className='wrapper'>
                    {isConnected ? <Room />: <JoinRoom />}
                    </div>
    </div>
  )
}
