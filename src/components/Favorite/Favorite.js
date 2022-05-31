import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';


const Favorite = props => {
  const cards = useSelector(state => getFavoriteCards(state, props.title));

    return (
      <main className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>
            Lorem ipsum in idipsum
        </p>
        <div className={styles.column}>
          {cards.map(card => <Card id={card.id} title={card.title} isFavorite={card.isFavorite} /> )}
        </div>
        
      </main>
        
    );
}

export default Favorite;