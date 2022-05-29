import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';


const Favorite = props => {
  const cards = useSelector(state => getFavoriteCards(state, props.title));
  console.log(cards);
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>
            Lorem ipsum in idipsum
        </p>
        {cards.map(card => <Card title={card.title} isFavorite={card.isFavorite} /> )}
      </div>
        
    );
}

export default Favorite;