import React from "react";
import Button from "../UI/button/button";
import Input from "../UI/input/input";
import './form.css'

const Form = (props) => {
    return (
        <div className="form">
            <div className="form__email">
            <p>E-mail:</p>
            <Input type="text" placeholder="Логин или e-mail"/>
            </div>
            <div className="form__password">
            <div className="form__password_name">
                <p className="form__password_name_p">Пароль</p>
                <p className="form__password_name_q">Забыли пароль?</p>
            </div>
            <Input type="password" placeholder="********"/>
            </div>
            <div className="form__policy">
                Нажимая войти, я принимаю условия Политики конфиденциальности и даю согласие на <span>обработку своих персональных данных</span>
            </div>
            <div className="form__button">
            <Button>
                Войти
            </Button>
            </div>
            <div className="form__reg">
                <p>Регистрация</p>
            </div>
        </div>
    )
}

export default Form;