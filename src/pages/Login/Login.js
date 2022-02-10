import React from 'react';
import styles from './Login.module.css';
import Stamp from '../../components/Stamp/Stamp';

function Login() {
    return <main className={styles.login}>
        <div className={styles.inner}>
            <Stamp />
            <form className={styles.form}>
                <p>Log Into Your Account</p>
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    </main>
}

export default Login;
