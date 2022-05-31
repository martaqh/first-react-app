import styles from './ButtonTrash.module.scss';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../redux/cardsRedux';

const ButtonTrash = props => {
    const dispatch = useDispatch();   

    const handleClick = e => {
        const cardId = e.target.id;
        dispatch(deleteCard(cardId));
    }

    return (
        <button className={styles.buttonTrash}
                   onClick={handleClick}
                   >
                <span className='fa fa-trash' id={props.id}></span>
        </button>
    );
}

export default ButtonTrash;