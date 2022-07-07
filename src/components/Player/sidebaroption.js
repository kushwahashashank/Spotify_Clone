import React from 'react'
import "../../css/sidebaroption.css"
function sidebaroption({title,Icon}) {
  return (
    <div className='sidebaroption'> 
    {Icon && <Icon className="sidebaroption__icon"/>}
    {Icon ? <h4>{title}</h4>:
    <p>
        {title}
    </p>
} 
    </div>
  )
}

export default sidebaroption