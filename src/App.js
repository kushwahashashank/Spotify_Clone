import React,{useEffect} from "react";
import Login from "./Components/login.jsx";
import Player from "./Components/Player/player.jsx";
import { getTokenFromUrl } from "./JS/spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import { useDatalayerValue } from "./Datalayer/datalayer.js";

const spotify = new SpotifyWebApi();  // Instance of the API
function App() {

// To get data and set data in Datalayer
// dispatch to set value in datalayer
const [{token,playlists},dispatch]= useDatalayerValue();
//Run code based on a given condition
 useEffect(()=>{
// code
const hash = getTokenFromUrl();

// Getting token from hash code of Url
const _token = hash.access_token;


if(_token){
  dispatch({
    type:'SET_TOKEN',
    token: _token,
  })
//Giving access token to spotify API
  spotify.setAccessToken(_token);
  
  // Getting user data from API
  spotify.getMe().then(user=>{
    //dispatching the user to the datalayer
    dispatch({
      type:'SET_USER',
      user:user,
    });
  });

  //Getting playlists of user
  spotify.getUserPlaylists().then((playlists)=>{
    dispatch({
      type:"SET_PLAYLISTS",
      playlists:playlists,
    })
  })

  spotify.getPlaylist("2c4m5DuiCsHRvk3jxrYGiG").then(response =>
    dispatch(
      {
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly:response,
      }
    ))
}
// clear the token from the Url
window.location.hash="";

  },);
// console.log(playlists.album.name);
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ):(
          <Login/>
        )
      }
    </div>
  );
}

export default App;
