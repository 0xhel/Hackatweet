import Image from 'next/image'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { login } from '../reducers/user';



function ModalIn(props) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);


    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');


    const handleRegister = () => {

        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),

        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.result) {
                    dispatch(login({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                }

            })

    }




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