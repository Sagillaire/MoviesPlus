import React from 'react'
import styles from './searchBar.module.css'
import Link from 'next/link'



const SearchBar = () => {
    return (
        <div className={styles.seContainer}>
            <input className={styles.input} type="text" placeholder="BUSQUEDA..."></input>
        </div>
    )
}

export default SearchBar