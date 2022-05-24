import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = props => {
    const dispatch = useDispatch();
   // const searchInput = 
    const handleSubmit = e => {
        e.preventDefault();
   //     dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchInput });
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..."  />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };


export default SearchForm;

