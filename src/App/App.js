
import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import {useState} from 'react';
import Searchresults from '../Searchresults/Searchresults';
import Playlist from '../Playlist/Playlist';

function App() {

  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([])

  let accessToken = null

  function saveAccessToken(token) {
      accessToken = token;
      setTimeout(() => {
          accessToken = null
      }, 1000 * 60 * 60)
  };
  
  function handleClick() {
      const client_id = '44e26ba2f78643f6b8c5d3701b63fc86';
      const redirect_uri = 'http://localhost:3000';
      const scope = 'user-read-private user-read-email'

      let url = 'https://accounts.spotify.com/authorize'
      url += '?response_type=token'
      url += '&client_id=' + encodeURIComponent(client_id)
      url += '&scpoe=' + encodeURIComponent(scope)
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri) 

      window.location = url  
  }

  let currentUrl = window.location.href 
      console.log(currentUrl)
      if (currentUrl.split('#').length > 1) {

          let params = currentUrl.split('#')[1]
      
          let queryString = params.split('&')
      
          let tokenString = queryString[0].split('=')
      
          let token = tokenString[1]
          console.log(token)

          saveAccessToken(token)
          //accessToken = token
      }

  console.log(accessToken)

  return (
    <div>
    <h1>-  Jammming  -</h1>
    <div className='logInButton'>
      {!accessToken && <button onClick={handleClick}>LogIn</button> || <p>Spotify connected</p>}
    </div>
    <Searchbar setTracks={setTracks}/>
    <div className='container'>
    <Searchresults tracks={tracks} addToPlaylist={setPlaylist}/>
    <Playlist tracks={playlist} setPlaylist={setPlaylist} removeFromPlaylist={setPlaylist}/>
    </div>
    </div>
  );
};

export default App;
