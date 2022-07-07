import React from 'react'
import "../css/login.css"
import { loginUrl } from '../JS/spotify'
function Login() {
  return (
    <div className='login'>
    <div className="logo">
    <img src="https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png" alt="" />
    <h2>Spotify</h2>
    </div>
   <a href={loginUrl} className='login_button'>LOG IN WITH SPOTIFY</a>
    </div>
  )
}

export default Login;