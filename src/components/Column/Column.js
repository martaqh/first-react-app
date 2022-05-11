import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm'

const Column = props => {
    return <article className={styles.column}>
    <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
    <ul className={styles.cards}>
        {props.cards.map(card => <li key={card.id}>{card.title}</li>)}
    </ul>
    <CardForm columnId={props.id} action={props.action} />
    </article>
}
 

export default Column;