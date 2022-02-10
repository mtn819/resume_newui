import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Stamp from "../Stamp/Stamp";
import styles from "./Nav.module.css";

function Nav() {
    return <nav className={styles.nav}>
        <Link to="login" className={styles.signout}>Sign Out &rarr;</Link>
        <Stamp />
        <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="editor">Editor</Link>
        </div>
    </nav>
}

export default Nav;
