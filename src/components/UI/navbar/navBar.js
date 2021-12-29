import React from "react";
import './navBar.css'

const NavBar = () => {
    return(
        <div className="navbar">
        <ul className="navnar_ul">
            <li className="navnar_li"><a>Текущий курс</a></li>
            <li className="navnar_li"><a>Курсы</a></li>
            <li className="navnar_li"><a>Преподаватели</a></li>
            <li className="navnar_li"><a>Мои достижения</a></li>
        </ul>
    </div>
    
    )
}

export default NavBar;