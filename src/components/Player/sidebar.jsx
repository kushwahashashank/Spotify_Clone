import React from 'react'
import "../../css/sidebar.css"
import SidebarOption from "./sidebaroption"
import {MdHomeFilled} from "react-icons/md"
import {FiSearch} from "react-icons/fi"
import {HiLibrary} from "react-icons/hi"
import { useDatalayerValue } from "../../Datalayer/datalayer.js";

function Sidebar() {

  const [{playlists}]= useDatalayerValue();


  return (
    <div className='sidebar'>
        <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
       
        <SidebarOption Icon={MdHomeFilled} title="Home" />
      
        <SidebarOption  Icon={FiSearch} title="Search"/>
 
<SidebarOption Icon={HiLibrary} title="Library"/>
<br />
<strong className='sidebar__title'>PLAYLISTS</strong>
<hr/>
{playlists?.items?.map(playlist=>(
  <SidebarOption title={playlist.name}/>
))}

    </div>
  )
}

export default Sidebar