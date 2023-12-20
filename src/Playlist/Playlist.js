import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';
import {useState} from 'react';

function Playlist(props) {

    const tracks = props.tracks;

    const [playlistTitle, setPlaylistTitle] = useState('')

    function handleChange(e) {
        setPlaylistTitle(e.target.value);
    };

    return (
        <div className={styles.div}>
            <input className={styles.input} onChange={handleChange} value={playlistTitle} />

            <Tracklist tracks={tracks} removeFromPlaylist={props.removeFromPlaylist}/>
        </div>
    )
}

export default Playlist;