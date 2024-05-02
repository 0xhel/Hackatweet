import styles from '../styles/Home.module.css';
import Image from 'next/image'

function Home() {
  return (

    <div className={styles.main}>
      <div className={styles.leftHome}>
        <Image className={styles.logo} src='/logo_twitter.webp'
          height={200}
          width={300} />
      </div>
      <div className={styles.rightHome} >
        <h1>See what's happening.</h1>
        <h3>Join Hackatweet today</h3>
        <button type='button' >Sign up</button>
        <p>Already have an account ?</p>
        <button type='button'> Sign in</button>




      </div>

    </div>



  );
}

export default Home;
