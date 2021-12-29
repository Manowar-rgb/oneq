import React, { useState } from "react";
import './registration.css'
import Button from "../../UI/button/button";
import Input from "../../UI/input/input";
import { NavLink } from "react-router-dom";
import Modal from "../modal/modal";

const Registration = (props) => {
    
    return (
        <div className="reg">
        <h1 className="form__title">{props.title}</h1>
        <div className="form__email">
            <p>E-mail:</p>
            <Input type="text" placeholder="e-mail"/>
        </div>
        <div className="form__password">
            <div className="form__password_name">
                <p className="form__password_name_p">Пароль</p>
            </div>
            <Input type="password" placeholder="********"/>
        </div>
        <div className="form__password">
            <div className="form__password_name">
                <p className="form__password_name_p">Повторите пароль</p>
            </div>
            <Input type="password" placeholder="********"/>
        </div>
        <div className="form__button">
        <div className="reg__policy">
                Я ознакомлен с правилами сервиса, принимаю условия Политики конфиденциальности и даю <span>согласие на обработку своих персональных данных</span>
            </div>
            <NavLink className="reg_btn" to="/">
            <Button>
                Зарегестрироваться
            </Button>
            </NavLink>
            </div>
           
        </div>
        
    )
}

export default Registration;