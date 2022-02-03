import '../App.scss';
import React from 'react';
// import {TextField} from "@material-ui/core";
// import Button from "@mui/material/Button";

function InputForm(props) {

    return (
        <form onSubmit={props.onClick} className='form' action=''>
            {/* <TextField*/}
            {/*    style={{margin: '15px', width: '300px', height: '60px'}}*/}
            {/*    id="outlined-basic"*/}
            {/*    label="Outlined"*/}
            {/*    variant="outlined"*/}
            {/*    value={props.value}*/}
            {/*    onChange={props.onChange}*/}
            {/*    autoFocus*/}
            {/*    inputRef={input => input && input.focus()}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    style={{margin: '15px 0', width: '150px', height: '56px'}}*/}
            {/*    variant="contained"*/}
            {/*    size="large"*/}
            {/*    onClick={props.onClick}*/}
            {/*>*/}
            {/*    Отправить*/}
            {/*</Button>*/}
            <input className="form__input" onChange={props.onChange} value={props.value} />
            <button className="form__button" onClick={props.onClick}>Отправить</button>
        </form>
    )
}

export default InputForm