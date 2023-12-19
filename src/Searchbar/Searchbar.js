import React from 'react';
import trackData from '../data';
import {useState} from 'react';

function Searchbar(props) {

    const [search, setSearch] = useState('')

    function HandleChange(e) {
        setSearch(e.target.value)
    };

    //console.log(trackData)

    function HandleSubmit(e) {
        e.preventDefault()
        props.setTracks(trackData.filter((track) => {
            return track.name === search
        }));
        setSearch('')
    };

    return (
        <div>
            <form onSubmit={HandleSubmit}>
            <input 
            type='text'
            placeholder='Enter track to search...' 
            value={search}
            onChange={HandleChange}/>

            <input type='submit' value='Search'/>
            </form>
        </div>
    )
}

export default Searchbar;