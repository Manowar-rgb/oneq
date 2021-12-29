import React from "react";
import './libary.css'

const Libary = ({title, bodyOne, bodyTwo}) =>{
    return(
        <div className="libary">
            <div className="libary__title">{title}</div>
            <div className="libary__body">
                <h3 className="libary_h3">{bodyOne}</h3>
                <h3 className="libary_h3">{bodyTwo}</h3>
            </div>
        </div>
    )
}

export default Libary;