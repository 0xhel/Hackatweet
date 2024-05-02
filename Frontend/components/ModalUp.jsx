import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ModalUp(props) {

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    if (!props.open) return null

    return (

        <div className={styles.signUpModal}>
            <FontAwesomeIcon icon={faXmark} className={styles.fontAIconUP} onClick={props.close} />
            <Image className={styles.logoModal} src='/logo_twitter.webp'
                height={50}
                width={70} />
            <h2>Create your Hackatweet account</h2>
            <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
            <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
            <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
            <button id="register" onClick={() => handleRegister()}>Sign up</button>
        </div>

    )

}

export default ModalUp