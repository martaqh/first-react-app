import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchstring } from '../../redux/searchStringRedux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';


const SearchForm = props => {
    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('handle submit', e.target);
        dispatch(updateSearchstring(searchString));
    }

    const handleChange = e => {
        setSearchString(e.target.value);
        console.log('handle change')
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchString} onChange={handleChange} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;

