import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {changeName} from "../store/profile/actions";

const InputProfileName = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = useCallback((e) => {
        setValue(e.target.value)
    }, []);

    const setName = useCallback(() => {
        dispatch(changeName(value))
        setValue('')
    }, [dispatch, value]);

    return (
        <>
            <input type='text' value={value} onChange={handleChange}/>
            <button onClick={setName}>Введите имя</button>
        </>
    )
}

export default InputProfileName;