import React from 'react'
import Signout from '../Signout/Signout'
import styles from './Navigation.module.scss'

const Navigation = () => {
    return (
        <nav>
            <h2 className={styles.nav_title}>Notesy</h2>
            <Signout />
        </nav>
    )
}

export default Navigation
