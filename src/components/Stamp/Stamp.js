import React from 'react';
import styles from './Stamp.module.css';
import logo from './res/logo.svg';


function Stamp() {
    return <div className={styles.stamp}>
        <img src={logo} alt="Edammo Logo" />
        <hgroup>
            <h1>Edammo</h1>
            <h2>Sourcing Engine</h2>
        </hgroup>
    </div>
}

export default Stamp