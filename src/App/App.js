
import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import {useState} from 'react';
import Searchresults from '../Searchresults/Searchresults';
import Playlist from '../Playlist/Playlist';

function App() {

  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([])

  return (
    <div>
    <h1>-  Jammming  -</h1>
    <Searchbar setTracks={setTracks}/>
    <div className='container'>
    <Searchresults tracks={tracks} addToPlaylist={setPlaylist}/>
    <Playlist tracks={playlist} removeFromPlaylist={setPlaylist}/>
    </div>
    </div>
  );
};

export default App;
