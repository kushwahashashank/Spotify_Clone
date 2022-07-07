//Documentation
//https://developer.spotify.com
//documentation/web-playbacl-sdk/quick-start/#

//Takes to the spotify official lofin page for authorization.
export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "bbabae649dc7431ab9fb876b2c8da5f4";
// bbabae649dc7431ab9fb876b2c8da5f4
// Redirect to our website when login.
const redirectUri = "http://localhost:3000/";

//access type by app
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//getting access token fron the redirect Url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]]=decodeURIComponent(parts[1]);
      return initial;
    },{});
};

//creating link to authenticate user
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
