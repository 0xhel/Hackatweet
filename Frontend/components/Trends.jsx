import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'


function Trends(props) {





    return (
        <div className={styles.trend}>
            <p>{props.name}</p>
            <span>{props.counter} Tweet{'s if multiple func'}</span>
        </div>
    )
}

export default Trends;