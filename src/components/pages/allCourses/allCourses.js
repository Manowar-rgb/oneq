import React, { useState } from "react";
import HeaderAll from "../../UI/header/header";
import Libary from "../../UI/libary/libary";
import NavBar from "../../UI/navbar/navBar";
import './allCourses.css';
import { NavLink } from "react-router-dom";

const AllCourses = () => {
    const [courses, setCourses] = useState([
        {title: 'Трейд-Мастер', bodyOne: '8 модулей. 27 уроков.', bodyTwo: 'Спикер: невероятный Суслик'},
        {title: 'копи-биз', bodyOne: '8 модулей. 27 уроков.', bodyTwo: 'Спикер: невероятный Суслик'},
        {title: 'Трейд-Мастер', bodyOne: '8 модулей. 27 уроков.', bodyTwo: 'Спикер: невероятный Суслик'},
        {title: 'копи-биз', bodyOne: '8 модулей. 27 уроков.', bodyTwo: 'Спикер: невероятный Суслик'}
    ])
    return (
        <div className="allCourses">
            <div className="allCourses__navbar">
           <NavBar/>
           </div>
            <div className="allCourses__wrapper">
            <HeaderAll header='Все курсы'/>
            <div className="allCourses__wrapper_h2">Курсы в вашей библиотеке</div>
            <div className="allCouses_my">
                    <div className="allCourses_my_content">
                        <NavLink style={{'text-decoration': 'none'}} to="/bizdiz"><strong>биз-диз</strong></NavLink>
                        <div className="allCourses_my_content_h3">
                        <h3 className="allCoueses_h3">8 модулей. 27 уроков.</h3>
                        <h3 className="allCoueses_h3">Спикер: Невероятный Суслик</h3>
                        </div>
                    </div>
                    <div className="allCourses_my_date">
                        <h3 className="allCoueses_h3">Даты курсов:</h3>
                        <h2 className="allCourses_date">15.07-15.08</h2>   
                    </div>                      
            </div>
            <div className="allCourses__wrapper_h2">Общая библиотека курсов</div>
            <div className="allCourses_library">
                {
                    courses.map(cours =>
                        <div className="allCourses_library_elem">
                        <Libary title={cours.title} bodyOne={cours.bodyOne} bodyTwo={cours.bodyTwo}/></div>
                        )
                }
            </div>
            </div>
        </div>                      
    )
}

export default AllCourses;