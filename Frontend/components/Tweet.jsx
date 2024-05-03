import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'


function Tweet(props) {

    function handleLike() {

    }

    function handleDelete() {

    }




    return (
        <div className={styles.tweet} >
            <div>
                <Image className={styles.profilPic} src="/egg.jpg"
                    height={250}
                    width={300} />
                <p>{props.firstname} {props.username} • {props.date}</p>
                <p>{props.tweet}</p>
                <div>
                    <FontAwesomeIcon onClick={() => handleLike()} icon={faHeart} />
                    <FontAwesomeIcon onClick={() => handleDelete()} con={faTrashCan} />
                </div>
            </div>
        </div>
    )
}

export default Tweet;