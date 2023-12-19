
import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import trackData from '../data';
import {useState} from 'react';

function App() {

  const [tracks, setTracks] = useState([]);
  {console.log(tracks)};

  return (
    <>
    <h1>Jammming</h1>
    <Searchbar setTracks={setTracks}/>

    {tracks.map((track) => {
      return <div key={track.id}>
        <p style={{display:'inline'}}>{track.name}, {track.artist} </p><span> <button>+</button></span>
      </div>
    })}
    </>
  )
}

export default App;
