import React from 'react';
import styles from './Track.module.css';

function Track(props) {

    /*function handleClickToAdd(e) {
        props.addToPlaylist((prev) => [...prev, props.track])
    };*/

    function handleClickToAdd(e) {
        props.addToPlaylist((prev) => {
            if (!prev.includes(props.track)) {
                return [...prev, props.track]
            } else {
                return [...prev]
            }
        })
    };

    function handleClickToRemove(e) {
        props.removeFromPlaylist((prev) => prev.filter(track => track !== props.track))
    }

    return (
        <div className={styles.container}>
        <div>
            <p className={styles.track}>{props.track.name}</p>
            <p className={styles.artist}>{props.track.artist}  |  {props.track.album}</p>
        </div>
        <div className={styles.button}>
            {props.addToPlaylist && <button onClick={handleClickToAdd}>+</button> || <button onClick={handleClickToRemove}>-</button>}
        </div>
        </div>

    )
}

export default Track;