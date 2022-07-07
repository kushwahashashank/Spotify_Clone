import React from 'react'
import "../../css/player.css"
import Sidebar from '../Player/sidebar.jsx'
import Body from '../Player/body.jsx'
import Footer from '../Player/footer.jsx'
function Player({spotify}) {
  return (
    <div className='player'>
      <div className="player_body">
        <Sidebar/>
        <Body spotify={spotify}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Player