import React, { Children } from "react";
import classes from './input.module.css'

const Input = (props) => {
    return (
        <input className={classes.input} {...props}/>
    )
}

export default Input;