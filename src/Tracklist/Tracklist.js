import React from 'react';

function Tracklist(props) {

    const tracks = props.tracks

    return (
        <>
        {tracks.map((track) => {
            return <div key={track.id}>
              <p style={{display:'inline'}}>{track.name}, {track.artist} </p><span> <button>+</button></span>
            </div>
          })};
          </>
    );    
};

export default Tracklist; 