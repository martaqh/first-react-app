import styles from './ButtonFavorite.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';


const ButtonFavorite = props => {
    const dispatch = useDispatch();
    const cardId = props.id;
    console.log(props);
    const handleClick = e => {
        e.preventDefault();
        console.log('clicked');
        dispatch(toggleCardFavorite(cardId));
    }
    
    return <button className={clsx(styles.buttonFavorite, props.isFavorite === true && styles.active)}
                   onClick={handleClick}>
                <span className='fa fa-star-o'></span>
            </button>
}

export default ButtonFavorite