import React from "react";
import NavBar from "../../UI/navbar/navBar";
import HeaderAll from "../../UI/header/header";
import './bizdiz.css'

const Bizdiz = () => {
    return(
        <div className="bizdiz">
            <div className="bizdiz__navbar">
                <NavBar/>
            </div>
            <div className="bizdiz__wrapper">
                <div className="bizdiz__header">
                <HeaderAll header='Биз-диз'/>
                </div>
                <div className="bizdiz__body">
                    <div className="bizdiz__video">
                    
                    </div>
                    <div className="bizdiz__body_ul">
                        <ul>
                            <li className="bizdiz__body_li">Модуль 1. Терминология</li>
                            <li className="bizdiz__body_li">Модуль 2. Терминология</li>
                            <li className="bizdiz__body_li">Модуль 3. Терминология</li>
                            <li className="bizdiz__body_li">Модуль 4. Терминология</li>
                            <li className="bizdiz__body_li">Модуль 5. Терминология</li>
                            <li className="bizdiz__body_li">Модуль 6. Терминология</li>
                            <li className="bizdiz__body_li">Модуль 7. Терминология</li>
                            <li className="bizdiz__body_li">Модуль 8. Терминология</li>
                        </ul>
                    </div>
                    <div className="bizdiz__body__descr">
                        <div className="bizdiz__body__descr_title">Описание курса</div>
                        <div className="bizdiz__body__descr_title_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bizdiz;