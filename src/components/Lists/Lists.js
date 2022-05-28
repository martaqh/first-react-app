import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
import { Link } from 'react-router-dom';
import styles from './Lists.module.scss';
import { useDispatch } from 'react-redux';
import { updateSearchstring } from '../../redux/store';

const Lists = () => {
    const lists = useSelector(getAllLists);
    const dispatch = useDispatch();
    const zeroSerchString = () => dispatch(updateSearchstring(''))

    return (
        <section className={styles.lists}>
          <h2 className={styles.heading}>Browse lists</h2>
          {lists.map(list => (
            <Link key={list.id} to={"/list/" + list.id} className={styles.listLink} onClick={zeroSerchString}>
              <h3>{list.title}</h3>
              <p>{list.description}</p>
            </Link>
          ))}
        </section>
      );
}

export default Lists