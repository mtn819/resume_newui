import React, { useState } from 'react';
import styles from './Editor.module.css';
import MainLayout from '../../components/MainLayout/MainLayout';

function Editor() {
    const [state, setState] = useState({
        positions: [
            {name: 'Position1', exp: '4'},
            {name: 'Position2', exp:  '7'},
        ],
        currPosition: '',
    });

    return <MainLayout>
        <main className={styles.editor}>

            {/**POSITIONS */}
            <div className={styles.positions}>
                {/**NEW */}
                <article className={styles.positions__new}>
                    <small
                        onClick={() => setState({...state, newPosition: true})}
                    >+ New Position</small>
                </article>

                {state.positions
                .map(p => <article
                    key={p.name}
                >
                    <strong className={styles.positions__name}>{p.name}</strong>
                    <small
                        className={styles.positions__edit} 
                        onClick={() => {
                                setState({...state, currPosition: p.name});
                                console.log(state, p.name);
                        }}
                    >Edit</small>

                    {/**MODAL */}
                    <dialog open={state.currPosition === p.name}>
                        <article>
                            <header className={styles.modal__header}>
                                <strong>{p.name}</strong>
                                <div
                                    className={styles.modal__x}
                                    onClick={() => setState({
                                        ...state,
                                        currPosition: '',
                                    })}
                                >
                                    &#10005;
                                </div>
                            </header>
                            <form>
                                <label htmlFor="name">Name</label>
                                <input name="name" id="name" placeholder={p.name} required />
                                
                                <label htmlFor="exp">Experience (years)</label>
                                <input type="number" placeholder={p.exp} min="0" required />

                                <button type="submit">Submit Changes</button>
                            </form>
                        </article>
                    </dialog>

                </article>)}
            </div>
        </main>
    </MainLayout>
}

export default Editor