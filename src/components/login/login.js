import React, { Children } from "react";
import Form from "../form/form";
import Button from "../UI/button/button";
import Input from "../UI/input/input";
import './login.css'

const Login = (props) => {
    return (
        <div className="block">
            <div className="wrap">
                <h1 className="wrap__title">{props.title}</h1>
                <Form/>
            </div>
        </div>
    )
}

export default Login;