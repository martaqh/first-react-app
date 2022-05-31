import styles from './Card.module.scss';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import ButtonTrash from '../ButtonTrash/ButtonTrash';


const Card = props => {

    return (
        <li className={styles.card}>{props.title}
            <div className={styles.buttons}>
                <ButtonFavorite isFavorite={props.isFavorite} id={props.id} />
                <ButtonTrash id={props.id} />
            </div>
        </li>
    )
}

export default Card;