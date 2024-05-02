import { Main } from 'next/document';
import styles from '../styles/MainPage.module.css';
import Image from 'next/image'

function MainPage() {





    return (
        <div className={styles.boardContainer}>

            <div className={styles.leftBoard}>
                <div>
                    <Image src="/logo_twitter.webp" />
                </div>
                <div>
                    <Image src="/logo_twitter.webp" />
                    <p>{'firstname here'}</p>
                    <p>{'@username here'}</p>
                </div>
                <div>
                    <button type='button'>Logout</button>
                </div>
            </div>

            <div className={styles.mainBoard}>
                <div>
                    <h3>Home</h3>
                    <input type='text' placeholder="What's up?" ></input>
                    <div>
                        <span>{'count'}/280</span>
                        <button></button>
                    </div>
                </div>



            </div>
            <div className={styles.rightBoard}>

            </div>
        </div>


    );
}

export default MainPage;