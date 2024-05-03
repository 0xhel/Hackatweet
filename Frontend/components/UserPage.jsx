import { Main } from 'next/document';
import styles from '../styles/UserPage.module.css';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function UserPage() {





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
                        <button type='button' className={styles.logout}>Logout</button>
                    </div>
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
                            <Image className={styles.profilPic} src="/egg.jpg"
                                height={250}
                                width={300} />
                            <p>{'firstname here'} {'@username here'} • {'Time tweet here'}</p>
                            <p>{'tweet content here'}</p>
                            <div>
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faTrashCan} />
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

export default UserPage;