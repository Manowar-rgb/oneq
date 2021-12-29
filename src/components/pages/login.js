import React, { Children, useState } from "react";
import Form from "./form/form";
import Button from "../UI/button/button";
import Input from "../UI/input/input";
import './login.css'
import Registration from "./registration/registration";
import loginStyles from './login.module.css'
import Recovery from "./recovery/recovery";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AllCourses from "./allCourses/allCourses";
import Bizdiz from "./bizdiz/bizdiz";


const Login = (props) => {
   
    return (
       <Router>
           <Routes>
               <Route path="/"
                element={
                <div className={loginStyles.block}>
                <div className={loginStyles.wrap__form}>
                <Form  title="Войти в аккаунт"/>
                </div> 
                </div>
                }
               >
               </Route>
               <Route path="/registration"
                element={
                <div className={loginStyles.block}>
                <div className={loginStyles.wrap__registration}> 
                <Registration title="Регистрация"/>
                </div> 
                </div>
                }
               >
               </Route>
               <Route path="/recovery"
                element={
                <div className={loginStyles.block}>
                <div className={loginStyles.wrap__recovery}> 
                <Registration title="Восстановить пароль"/>
                </div>
                </div>
                }
               >
               </Route>
               <Route path="/allcourses"
                element={
                <AllCourses/>
                }
               ></Route>
               <Route path="/bizdiz"
                element={
                <Bizdiz/>
                }
               ></Route>
            </Routes>
           
        </Router>
        
    )
}

export default Login;