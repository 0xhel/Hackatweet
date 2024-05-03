import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ModalIn(props) {

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    if (!props.open) return null

    return (

        <div className={styles.signInModal}>
            <FontAwesomeIcon icon={faXmark} className={styles.fontAIconIN} onClick={props.close} />
            <Image className={styles.logoModal} src='/logo_twitter.webp'
                height={50}
                width={70} />
            <h2>Connect to Hackatweet</h2>
            <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
            <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
            <button id="register" onClick={() => handleRegister()}>Sign in</button>
        </div>

    )

}

export default ModalIn