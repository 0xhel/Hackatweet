import styles from '../styles/Index.module.css';
import Image from 'next/image'
import { useState } from 'react';
import ModalUp from './ModalUp'
import ModalIn from './ModalIn'

function Index() {

  const [openUpModal, setOpenUpModal] = useState(false)
  const [openInModal, setOpenInModal] = useState(false)

  const closeUpModal = () => {
    setOpenUpModal(false)
  }

  const closeInModal = () => {
    setOpenInModal(false)
  }



  return (

    <div className={styles.main}>
      <ModalUp open={openUpModal} close={closeUpModal} />
      <ModalIn open={openInModal} close={closeInModal} />
      <div className={styles.leftHome}>
        <Image className={styles.logo} src='/logo_twitter.webp'
          height={250}
          width={300} />
      </div>
      <div className={styles.rightHome} >
        <img className={styles.rightLogo} src='/logo_twitter.webp'
        />
        <h1 className={styles.title}>See what's happening.</h1>
        <h3>Join Hackatweet today</h3>
        <button className={styles.button} type='button' onClick={() => setOpenUpModal(true)}>Sign up</button>

        <p>Already have an account ?</p>
        <button className={styles.button} type='button' onClick={() => setOpenInModal(true)}> Sign in</button>


      </div>

    </div>



  );
}

export default Index;
