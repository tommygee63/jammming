import React from 'react';
import styles from './Serachbar.module.css';

function Searchbar(props) {

    

    function HandleChange(e) {
        props.setSearch(e.target.value)
    };


    /*async function HandleSubmit(e) {

        e.preventDefault()
        props.setTracks(trackData.filter((track) => {
            return track.name === search
        }));
        setSearch('')
    };*/


    return (
        <div className={styles.div}>
            {/*<form onSubmit={HandleSubmit}></form>*/}
            <input 
            className={styles.input}
            type='text'
            placeholder='Enter track to search...' 
            onChange={HandleChange} />
            {/*value={search}*/}
            
            <br/><br/>
            <input className={styles.submit} type='submit' value='Search' onClick={props.getTracks}/>
            {/*</form>*/}
        </div>
    )
}

export default Searchbar;

