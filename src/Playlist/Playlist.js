import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';
import {useState} from 'react';

function Playlist(props) {

    const [playlistTitle, setPlaylistTitle] = useState('');
    const [uris, setUris] = useState([]);

    function handleChange(e) {
        setPlaylistTitle(e.target.value);
    };

    function handleClick(e) {
        props.tracks.forEach(track => {
            setUris((prev) => {
                return [...prev, track.id]
            })
        })
        props.setPlaylist([])
        setPlaylistTitle('')
    };

    return (
        <div className={styles.div}>
            <input className={styles.input} onChange={handleChange} value={playlistTitle} placeholder='Name your album...'/>

            <Tracklist tracks={props.tracks} removeFromPlaylist={props.removeFromPlaylist}/>

            <button className={styles.button} onClick={handleClick}>Save to Spotify</button>
        </div>
    )
}

export default Playlist;