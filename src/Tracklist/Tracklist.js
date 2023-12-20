import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {

    return (
        <>
        {props.tracks.map((track) => <Track track={track} key={track.id} addToPlaylist={props.addToPlaylist} removeFromPlaylist={props.removeFromPlaylist}/>)};
        </>
    );    
};

export default Tracklist; 