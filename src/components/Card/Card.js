import styles from './Card.module.scss';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';

const Card = props => {
    console.log(props);
    return (
        <li className={styles.card}>{props.title}<ButtonFavorite isFavorite={props.isFavorite} id={props.id} /></li>
    )
}

export default Card;