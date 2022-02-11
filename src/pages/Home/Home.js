import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { STRAPI_API } from '../../config/constants';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/MainLayout/MainLayout';


function Home() {
    const [state, setState] = useState({
        articles: [],
        news: true, // allow user to hide news
        quickstart: true, // allow user to hide quickstart
        positions: [
            { name: "Position 1", exp: "2 years", skills: ["Java", "Python"] },
            { name: "Position 2", exp: "5 years", skills: ["C#", "C++"] },
        ]
    });

    useEffect(() => {
        fetch(STRAPI_API + 'ARTICLES?sort=DATE:DESC&pagination[page]=1&pagination[pageSize]=2')
            .then(res => res.json())
            .then(data => {
                setState({
                    ...state,
                    articles: data.data.map(a => a.attributes),
                });
            })
            .catch(err => console.log(err));
    }, []) // eslint-disable-line

    return <MainLayout>
        <main className={styles.home}>

            {/**NEWS */}
            {state.news
                ? <article className={styles.news}>
                    <header className={styles.news__header}>
                        <strong>News</strong>
                        <div
                            className={styles.news__x}
                            onClick={() => setState({
                                ...state,
                                news: false,
                            })}
                        >
                            &#10005;
                        </div>
                    </header>

                    {state.articles.length === 0
                        ? <p aria-busy="true"></p>
                        : state.articles
                            .map(a => <article key={a.TITLE}>
                                <strong>{new Date(a.DATE).toDateString()}</strong>
                                <h2>{a.TITLE}</h2>
                                <p>{a.BRIEF}</p>

                                <a href={a.LINK} target="_blank" rel="noreferrer"><small>&#128279;More</small></a>
                            </article>)}
                </article>
                : ''}

            {/**QUICKSTART */}
            {state.quickstart
                ? <article className={styles.quickstart}>
                    <header className={styles.quickstart__header}>
                        <strong>Quickstart</strong>
                        <div
                            className={styles.quickstart__x}
                            onClick={() => setState({
                                ...state,
                                quickstart: false,
                            })}
                        >
                            &#10005;
                        </div>
                    </header>

                    <p>The Edammo Sourcing Engine uses state-of-the-art data science techniques to scrape the web and find the best candidates for your position.</p>
                    <p>To get started with creating a position, head over to our <Link to="/editor">editor</Link>.</p>
                    <p>See our <Link to="/documentation">full documentation</Link>.</p>
                </article>
                : ''}

            {/**POSITIONS */}
            <article className={styles.positions}>
                <header>
                    <strong>Positions</strong>
                </header>

                {state.positions
                    .map(p => <details>
                        <summary>{p.name}</summary>

                        <ul>
                            <li>
                                <small>Experience:</small> <i>{p.exp}</i>
                            </li>
                            <li>
                                <small>Skills:</small> <i>{p.skills.map(s => s).join(', ')}</i>
                            </li>
                        </ul>

                        <a
                            role="button"
                            href="/"
                            className={styles.positions__seeMore}
                        >
                            Manage Position
                        </a>
                    </details>)}
            </article>

        </main>
    </MainLayout>
}

export default Home