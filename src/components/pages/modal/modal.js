import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../UI/button/button";
import Input from "../../UI/input/input";
import "./modal.css"

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__title">
                Пожалуйста, напишите наже почту, указанную при регистрации. Мы направим письмо с сылкой для восстановления пароля.
                </div>
                <div className="modal__input">
                <p>E-mail:</p>
                <Input placeholder="E-mail"/>
                </div>
                <div className="modal_btn">
                <NavLink className="reg_btn" to="/recovery">
                    <Button>
                       Отправить
                    </Button>
                 </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Modal;