import '../App.scss';
import React, {useCallback, useState} from "react";
import {changeName} from "../store/profile/actions";
import {useDispatch} from "react-redux";

const Profile = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = useCallback ((e) => {
        setValue(e.target.value)
    }, []);

    const setName = useCallback(() => {
        dispatch(changeName(value))
        setValue('')
    }, [dispatch, value]);

    return (
        <>
            <div>
                <h4>Profile</h4>
            </div>
            <div>
                <input type='text' value={value} onChange={handleChange} />
                <button onClick={setName}>Введите имя</button>
            </div>
        </>
    )

}

export default Profile