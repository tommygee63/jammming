import React from 'react';
import trackData from '../data';
import {useState} from 'react';
import styles from './Serachbar.module.css';

function Searchbar(props) {

    const [search, setSearch] = useState('')

    function HandleChange(e) {
        setSearch(e.target.value)
    };


    async function HandleSubmit(e) {

        e.preventDefault()
        props.setTracks(trackData.filter((track) => {
            return track.name === search
        }));
        setSearch('')
    };

    return (
        <div className={styles.div}>
            <form onSubmit={HandleSubmit}>
            <input 
            className={styles.input}
            type='text'
            placeholder='Enter track to search...' 
            value={search}
            onChange={HandleChange}/>
            <br/><br/>
            <input className={styles.submit} type='submit' value='Search'/>
            </form>
        </div>
    )
}

export default Searchbar;

