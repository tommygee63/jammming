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

    function handleClick() {
        props.tracks.forEach(track => {
            setUris((prev) => {
                return [...prev, track.uri]
            })
        })
        if(!playlistTitle || uris.length === 0) {
            return;
        };

        let userId = ''
        try {
            fetch('https://api.spotify.com/v1/me', {
                headers: {Authorization: `Bearer ${props.accessToken}`}
            }).then((response) => {
                return response.json()
            }).then((jsonResponse) => {
                console.log(jsonResponse)
                userId = jsonResponse.id
                console.log(userId)
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: {Authorization: `Bearer ${props.accessToken}`, 'Content-Type': 'application/json'},
                    method: 'POST',
                    body: JSON.stringify({name: playlistTitle})
            })
            }).then((response) => {
                return response.json()
            }).then ((jsonResponse) => {
                let playlistId = jsonResponse.id
                console.log(jsonResponse)
                console.log(playlistId)
                fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    headers: {Authorization: `Bearer ${props.accessToken}`},
                    method: 'POST',
                    body: JSON.stringify({uris: uris})
                })
            })
        } catch(e) {
            console.log(e)
        }
        props.setPlaylist([])
        setPlaylistTitle('')
        setUris([])
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