import React, { Children } from "react";
import './button.css'

const Button = (props) => {
    return (
        <button {...props} className='btn'>
            {props.children}
        </button>
    )
}

export default Button;