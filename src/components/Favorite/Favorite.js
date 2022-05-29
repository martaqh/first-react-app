import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';


const Favorite = props => {
  const cards = useSelector(state => getFavoriteCards());
  console.log(cards);
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>
            Lorem ipsum in idipsum
        </p>
        {cards.map(card => <Card /> )}
      </div>
        
    );
}

export default Favorite;