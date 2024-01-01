
import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import {useState} from 'react';
import Searchresults from '../Searchresults/Searchresults';
import Playlist from '../Playlist/Playlist';

function App() {

  const [search, setSearch] = useState('')
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([])
  const [accessToken, setAccessToken] = useState('')

  //saves access token
  function saveAccessToken(token) {
      setAccessToken (token);
      setTimeout(() => {
          setAccessToken('')
      }, 1000 * 60 * 60)
  };
  
  //requests access token from spotify
  function handleClick() {
      const client_id = '44e26ba2f78643f6b8c5d3701b63fc86';
      const redirect_uri = 'http://localhost:3000';
      const scope = 'user-read-private user-read-email playlist-modify-public'

      let url = 'https://accounts.spotify.com/authorize'
      url += '?response_type=token'
      url += '&client_id=' + encodeURIComponent(client_id)
      url += '&scope=' + encodeURIComponent(scope)
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri) 

      window.location = url  
  }

  //reads access token from URL and resets URL
  if (!accessToken) {
    let currentUrl = window.location.href 
    //console.log(currentUrl)
    //console.log(currentUrl.split('#').length)
    if (currentUrl.split('#').length > 1) {
      
        let params = currentUrl.split('#')[1]
  
        let queryString = params.split('&')
    
        let tokenString = queryString[0].split('=')
    
        let token = tokenString[1]
        //console.log(token)

        saveAccessToken(token)
        
        setTimeout(() => {
          window.history.pushState(accessToken, '', 'http://localhost:3000')
        }, 1500)
    }
  }

  
  // gets and displays tracks
  async function getTracks() {
    try {
      await fetch(`https://api.spotify.com/v1/search?q=${search}&type=track`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then((response) => {
        return response.json()
      }).then((jsonResponse) => {
        setTracks([])
        jsonResponse.tracks.items.map((track) => {
          setTracks((prev) => {
            return [...prev, {
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              id: track.id,
              uri: track.uri
            }]
          })
        })
      })
    } catch(e) {
      console.log(e.message)
    }
  }

  return (
    <div>
    <h1>-  Jammming  -</h1>
    <div className='logInButton'>
      {!accessToken && <button onClick={handleClick}>LogIn</button> || <p>Spotify connected</p>}
    </div>
    <Searchbar setSearch={setSearch} getTracks={getTracks}/>
    <div className='container'>
    <Searchresults tracks={tracks} addToPlaylist={setPlaylist}/>
    <Playlist tracks={playlist} setPlaylist={setPlaylist} removeFromPlaylist={setPlaylist} accessToken={accessToken}/>
    </div>
    </div>
  );
};

export default App;
