import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Searchresults(props) {

    const tracks = props.tracks

    return (
        <div>
            <h2>Search Results</h2>

            <Tracklist tracks={tracks}/> 
        </div>
    )
}

export default Searchresults; 