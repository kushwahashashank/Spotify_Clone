import React from 'react'
import "../../css/songrow.css"
function Songrow({ track, playSong }) {
  return (
    <div className='songrow'>
<img className='songrow__album' src={track.album.images[0].url}alt="" />
<div className="songrow__info">

</div>
<h1>{track.name}</h1>
<p>
{track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
</p>
    </div>
  )
}

export default Songrow
