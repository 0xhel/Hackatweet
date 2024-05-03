import { Main } from 'next/document';
import styles from '../styles/UserPage.module.css';
import Image from 'next/image'
import { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Tweet from './Tweet';
import { logout } from '../reducers/user'

function UserPage() {
    const dispatch = useDispatch()
    const [counter, setCounter] = useState('')


    function handleLogout() {
        dispatch(logout())

    }











    return (
        <div className={styles.boardContainer}>

            <div className={styles.leftBoard}>
                <div className={styles.leftTop} >
                    <img className={styles.logo} src="/logo_twitter.webp"

                    />
                </div>
                <div className={styles.leftBottom}>
                    <div className={styles.subleftBottom}>
                        <div className={styles.profilPic}>
                            <Image className={styles.profilPic} src="/egg.jpeg"
                                height={57}
                                width={60} />
                        </div>
                        <div>
                            <p className={styles.firstname}>{'firstname here'}</p>
                            <p className={styles.username}>{'@username here'}</p>
                        </div>
                    </div>
                    <div>
                        <button type='button' onClick={() => handleLogout()} className={styles.logout}>Logout</button>
                    </div>
                </div>
            </div>

            <div className={styles.mainBoard}>
                <div className={styles.header}>
                    <h3 className={styles.homeTitle}>Home</h3>
                    <input onChange={(e) => setCounter(e.target.value)} value={counter} className={styles.tweetInput} type='text' maxLength={280} placeholder="What's up?" ></input>
                    <div className={styles.tweetBtnContainer} >
                        <span className={styles.countTxt}>{counter.length}/280</span>
                        <button className={styles.tweetBtn}>Tweet</button>
                    </div>
                </div>
                <div className={styles.tweetContainer}>




                </div>
            </div>

            <div className={styles.rightBoard}>
                <h3 className={styles.homeTitle}>Trends</h3>
                <div className={styles.trendContainer}>


                </div>

            </div>
        </div>


    );
}

export default UserPage;