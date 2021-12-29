import React, { Children, useState } from "react";
import Button from "../../UI/button/button";
import Input from "../../UI/input/input";
import Registration from "../registration/registration";
import './form.css'
import { NavLink } from "react-router-dom";
import Modal from "../modal/modal";

const Form = (props) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className="form">
            <h1 className="form__title">{props.title}</h1>
            <div className="form__email">
            <p>E-mail:</p>
            <Input type="text" placeholder="Логин или e-mail"/>
            </div>
            <div className="form__password">
            <div className="form__password_name">
                <p className="form__password_name_p">Пароль</p>
                <p className="form__password_name_q" style={{'cursor': 'pointer'}} onClick={() => setModalActive(true)}>Забыли пароль?</p>
            </div>
            <Input type="password" placeholder="********"/>
            </div>
            <div className="form__policy">
                Нажимая войти, я принимаю условия Политики конфиденциальности и даю согласие на <span>обработку своих персональных данных</span>
            </div>
            <div className="form__button">
            <NavLink to="/allcourses">
            <Button>
                Войти
            </Button>
            </NavLink>
            </div>
            <div className="form__reg">
                <NavLink style={{'color': '#2A3993', 'text-decoration': 'underline', 'font-size': '14px'}} to="/registration">Регистрация</NavLink>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/> 
        </div>
    )
}

export default Form;