import React from 'react'
import "../../css/header.css";
import {FiSearch} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import {useDatalayerValue} from "../../Datalayer/datalayer.js"

function Header() {
    const [{user}]= useDatalayerValue();
  return (
    <div className='header'>
        <div className="header__left">
            <FiSearch className='header__icon'/>
            <input 
            placeholder='Search for Artists, Songs, or podcasts'
            type="text" />
        </div>
        <div className="header__right">
            <img className="user__icon"  src={user?.images[0].url} alt={<FaUser/>}/>
            <p id="user__name">{user?.display_name }</p>
        </div>
    </div>
  )
}

export default Header
