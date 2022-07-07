import React from 'react'
import "../../css/body.css"
import Header from "./Header.jsx"
import {useDatalayerValue} from "../../Datalayer/datalayer.js"
import {BsFillPlayCircleFill,BsThreeDots} from "react-icons/bs"
import {AiFillHeart} from "react-icons/ai"
import SongRow from "./Songrow.jsx"
function Body({spotify}) {
  const [{discover_weekly}]= useDatalayerValue();
  
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className="body__info">
        <img className='body__image' src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLISTS</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icon">
        <BsFillPlayCircleFill className='body__shuffle'/>
        <AiFillHeart className='body__heart'/>
        <BsThreeDots className='body__heart'/>
        </div>  
        <div>
          {/* list of songs */}
          {discover_weekly?.tracks.items.map(item =>(
            <SongRow track={item.track}/>
          ))}
        </div>

      </div>
    </div> 
  )
}

export default Body