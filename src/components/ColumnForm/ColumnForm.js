import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const listId = props.listId;
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.columnTitle}>Title:</span>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.columnIcon}>Icon:</span>
            <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;