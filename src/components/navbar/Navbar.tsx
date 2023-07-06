import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import SearchBar from '../searchBar/SearchBar';

const links = [
  {
    title: "INICIO",
    url: "/#",
    id: 1,
  },
  {
    title: "SERIES",
    url: "/series",
    id: 2,
  },
  {
    title: "PELICULAS",
    url: "/peliculas",
    id: 3,
  },

  {
    title: "GENERO",
    url: "/genero",
    id: 4,
  },

];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arreglo}>
        <div className={styles.conLogo}>
          <Link className={styles.logo} href='/#'>Logo</Link>
        </div>
        <div className={styles.link}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.links}>{link.title}</Link>
          ))}
        </div>
      </div>
      <div className={styles.anime}>
        <Link href='/animes' className={styles.anime}>ANIMES</Link>
        <SearchBar />
      </div>
    </div>
  )
}

export default Navbar