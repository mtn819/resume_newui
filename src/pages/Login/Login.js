import React from 'react'
import logo from './res/logo.svg';
import styles from './Login.module.css';
import Stamp from '../../components/Stamp/Stamp';

function Login() {
    return (
        <main>
            <div className={styles.stamp}>
                <Stamp />
            </div>

            <article className={styles.signIn}>
                <header><strong>Sign In</strong></header>

                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="email@example.com" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="********" />

                    <button type="submit">Sign In</button>
                </form>

                <footer className={styles.signIn__footer}>
                    <a href="#">Terms of Service</a>
                    ·
                    <a href="#">Help</a>
                    ·
                    <a href="#">Privacy Policy</a>
                </footer>
            </article>

        </main>
    )
}

export default Login