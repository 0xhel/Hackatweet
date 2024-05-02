import { Main } from 'next/document';
import styles from '../styles/MainPage.module.css';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function MainPage() {





    return (
        <div className={styles.boardContainer}>

            <div className={styles.leftBoard}>
                <div>
                    <Image src="/logo_twitter.webp" />
                </div>
                <div>
                    <Image className={styles.profilPic} src="/egg.jpg" />
                    <p>{'firstname here'}</p>
                    <p>{'@username here'}</p>
                </div>
                <div>
                    <button type='button'>Logout</button>
                </div>
            </div>

            <div className={styles.mainBoard}>
                <div className={styles.header}>
                    <h3>Home</h3>
                    <input type='text' placeholder="What's up?" ></input>
                    <div>
                        <span>{'count'}/280</span>
                        <button>Tweet</button>
                    </div>
                </div>
                <div className={styles.tweetContainer}>
                    <div className={styles.tweet} >
                        <div>
                            <Image className={styles.profilPic} src="/egg.jpg" />
                            <p>{'firstname here'} {'@username here'} • {'Time tweet here'}</p>
                            <p>{'tweet content here'}</p>
                            <div>
                                <FontAwesomeIcon icon={faHeart} style={iconStyle} className={styles} />
                                <FontAwesomeIcon icon={faTrashCan} style={iconStyle} className={styles} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.rightBoard}>
                <h3>Trends</h3>
                <div className={styles.trendContainer}>
                    <div className={styles.trend}>
                        <p>{'trend name here'}</p>
                        <span>{'counter here'} Tweet{'s if multiple func'}</span>
                    </div>

                </div>

            </div>
        </div>


    );
}

export default MainPage;