import React, { useState } from 'react'
import axios, { Axios } from 'axios'
export default function Login() {
    const[isLogin,setIsLogin]=useState(false)
    const [user_Name,setUsername]=useState(null)
    const[password,setPassword]=useState(null)
    const[confirm_password,setConfirm_password]=useState(null)
    const [error,setError]=useState(false)
    const [isClicked, setIsClicked] = useState(null);
   
   
    const handleSubmit = async()=>{
        if(isClicked === false) {
          if(password !== confirm_password){
            setError(true)
        }
         await axios.post('http://localhost:3002/register',{
            user_Name,password
        }).then( window.location.href = '/home')
        } else if (isClicked === true) {
          await axios.post('http://localhost:3002/login',{
            user_Name,password
        }).then(res => {
          if (res.data.loggedIn) {
            Axios.defaults.withCredentials = true;
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("username", res.data.username);
            window.location.href = '/home'
          }
        })
        }
    }
    
  return (
    <div className='login-container'>
      <div className='login-container-box'>
        <div className='form'>
            <input 
            type="text" 
            id="userId"
            name="username"
            placeholder='username'
            onChange={(e)=>setUsername(e.target.value)}
            />
            {console.log(isClicked)}
             <input 
            type="password" 
            id="password"
            name="password"
            placeholder='password'
            onChange={(e)=>setPassword(e.target.value)}
            />
             {!isLogin && <input 
            type="password" 
            id="confirm_password"
            name="confirm_password"
            placeholder='confirm_password'
            onChange={(e)=>setConfirm_password(e.target.value)}
            />}
            {error && <p> password are not the same</p>}
            <button className='submit-button' onClick={handleSubmit}>submit</button>
        </div>
        <div className='auth-options'>
            <button onClick={()=>[setIsLogin(false), setIsClicked(false)]}
            style={{backgroundColor: !isLogin? '  rgb(56, 56, 205)' :'rgb(18, 25, 118)'}}
            >Sign up</button>
            <button onClick={()=>[setIsLogin(true), setIsClicked(true)]}
            style={{backgroundColor: isLogin? '  rgb(56, 56, 205)' :'rgb(18, 25, 118)'}}>login</button>
        </div>
      </div>
    </div>
  )
}
