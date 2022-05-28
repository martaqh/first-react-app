import styles from './Lists.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSearchstring, getAllLists } from '../../redux/store';
import ListForm from '../ListForm/ListForm'

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
          <ListForm />
        </section>
      );
}

export default Lists