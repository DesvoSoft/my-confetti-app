import { useEffect } from 'react';
import styles from './Button.module.css';
import { runEmoji } from '../scripts/utils';
import { runRealistic } from '../scripts/utils';

function Button({onClick}) {

    return (
        <button className={styles.button} onClick={runEmoji}>
            Click me
        </button>
        );
}

export default Button