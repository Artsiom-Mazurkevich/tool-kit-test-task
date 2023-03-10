import React, {useState} from 'react';
import styles from './InputSearchRepository.module.css'

export const InputSearchRepository = () => {

    const [value, setValue] = useState('')

    return (
        <div className={styles.input__container}>
            <input className={styles.search__input} placeholder={'name repository...'} type="text" value={value} onChange={(e) => {setValue(e.currentTarget.value)}}/>
        </div>
    );
};

