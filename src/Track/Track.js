import React from 'react';

function Track(props) {
    return (
        <div key={props.track.id}>
            <p style={{display:'inline'}}>{props.track.name}, {props.track.artist} </p><span> <button>+</button></span>
        </div>
    )
}

export default Track;