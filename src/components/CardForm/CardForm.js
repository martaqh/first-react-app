import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';


const CardForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const columnId = props.columnId;
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({title, columnId}));
        setTitle('');
    }

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>     
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;