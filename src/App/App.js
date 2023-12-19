
import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import trackData from '../data';
import {useState} from 'react';
import Searchresults from '../Searchresults/Searchresults';

function App() {

  const [tracks, setTracks] = useState([]);
  {console.log(tracks)};

  return (
    <div>
    <h1>Jammming</h1>
    <Searchbar setTracks={setTracks}/>
    <Searchresults tracks={tracks}/>
    </div>
  );
};

export default App;
