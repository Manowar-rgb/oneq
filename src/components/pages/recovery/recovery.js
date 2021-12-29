import React from "react";
import Button from "../../UI/button/button";
import Input from "../../UI/input/input";
import "./recovery.css"

const Recovery = (props) => {
    return (
        <div className="form">
            <h1 className="form__title">{props.title}</h1>
            <div className="form__password">
            <div className="form__password_name">
                <p className="form__password_name_p">Новый пароль</p>
            </div>
            <Input type="password" placeholder="********"/>
        </div>
        <div className="form__password">
            <div className="form__password_name">
                <p className="form__password_name_p">Повторите новый пароль</p>
            </div>
            <Input type="password" placeholder="********"/>
        </div>
        <div className="form__button">
        <div className="recovery__policy">
        Нажимая войти, я принимаю условия <span>Политики конфиденциальности</span> и даю согласие на обработку своих персональных данных
            </div>
            <Button>
                Войти
            </Button>
            </div>
            </div>
    )
}

export default Recovery;