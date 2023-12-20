import React from 'react';
import styles from './Track.module.css';

function Track(props) {

    function handleClickToAdd(e) {
        props.addToPlaylist((prev) => [...prev, props.track])
    };

    function handleClickToRemove(e) {
        props.removeFromPlaylist((prev) => prev.filter(track => track !== props.track))
    }

    return (
        <div className={styles.container}>
        <div>
            <p className={styles.track}>{props.track.name}</p>
            <p className={styles.artist}>{props.track.artist}</p>
        </div>
        <div className={styles.button}>
            {props.addToPlaylist && <button onClick={handleClickToAdd}>+</button> || <button onClick={handleClickToRemove}>-</button>}
        </div>
        </div>

    )
}

export default Track;