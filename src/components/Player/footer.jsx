import React,{useState} from 'react'
import '../../css/footer.css'
import {IoIosSkipBackward,IoIosSkipForward} from "react-icons/io";
import {BsFillPlayCircleFill,BsShuffle} from "react-icons/bs"
import {FiRepeat} from "react-icons/fi"
// import { Grid} from "@material-ui/core";
import {TbPlaylist} from "react-icons/tb";
import {BsFillVolumeDownFill} from "react-icons/bs";
import img from "./download.jpeg"

function Footer({track}) {
  const [volume, setVolume] = useState(1)
  // const finalVolume = volume ** 2
 
  
  return (
    <div className="footer">
    <div className='footer__left'>
      <img className='footer__albumlogo' src={img} alt="" />
      <div className='footer__leftdata'>
      <p className='footer__leftdatahead'>Sugar & Brownies</p>
      <p>DHARIA</p>
      </div>
    </div>
    <div className="footer__center">
      <BsShuffle className="footer__green"/>
      <IoIosSkipBackward className="footer__icon"/>
      <BsFillPlayCircleFill fontSize="2.1rem" className='footer__play'/>
      <IoIosSkipForward className="footer__icon"/>
      <FiRepeat className='footer__green'/>
    </div>
    <div className="footer__right">   
    <TbPlaylist className='footer__icon change'/>
    <div  className='volume__section'>
  <BsFillVolumeDownFill className='footer__icon'/>
  <section>
        <input className='slider'
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={volume}
          onChange={event => {
            setVolume(event.target.valueAsNumber)
          }}
        />
      </section>

      </div>
</div>
    </div>
  )
}

export default Footer;