
import styles from './TextInput.module.scss';

const TextInput = (props) => {
    return <input className={styles.input} value={props.value} placeholder={props.placeholder} type="text" />
};
 

export default TextInput;
