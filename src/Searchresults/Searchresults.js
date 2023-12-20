import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Searchresults.module.css'

function Searchresults(props) {

    const tracks = props.tracks

    return (
        <div className={styles.div}>
            <h2>Search Results</h2>

            <Tracklist tracks={tracks} addToPlaylist={props.addToPlaylist}/> 
        </div>
    )
}

export default Searchresults; 