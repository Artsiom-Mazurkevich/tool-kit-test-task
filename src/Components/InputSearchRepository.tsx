import React, {useEffect, useState} from 'react';
import styles from './InputSearchRepository.module.css'
import {useDebounce} from "../utils/useDebounce";
import {useAppDispatch} from "../Redux/store";
import {setNameRepositoryAction} from "../Redux/paramsReducer";

export const InputSearchRepository = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce<string>(value, 900)


    useEffect(() => {
        dispatch(setNameRepositoryAction(debouncedValue))
    }, [debouncedValue])


    return (
        <div className={styles.input__container}>
            <input className={styles.search__input} placeholder={'name repository...'} type="text" value={value} onChange={(e) => {setValue(e.currentTarget.value)}}/>
        </div>
    );
};

