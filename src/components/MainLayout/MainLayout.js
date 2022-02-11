import React from 'react'
import { Link } from 'react-router-dom';
import Stamp from '../Stamp/Stamp';
import styles from './MainLayout.module.css';

function MainLayout({ children }) {
    return <>
        <a href="/login" className={styles.signOut}>Sign Out &rarr;</a>

        <header className={styles.header}>
            <Link to="/"><Stamp /></Link>
        </header>

        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/editor">Editor</Link></li>
                <li><Link to="/documentation">Documentation</Link></li>
            </ul>
        </nav>

        {children}

        <footer className={styles.footer}>
            <a href="#">Terms of Service</a>
            ·
            <a href="#">Help</a>
            ·
            <a href="#">Privacy Policy</a>
        </footer>

    </>
}

export default MainLayout