import React from 'react';
import { NavLink } from "react-router-dom"
import { v4 as uuid } from "uuid";

const ColorList = ({colors}) => {
    return (
        <div >
            <p>Please select a color</p>
            {colors.map(color => {
                return <NavLink key={uuid()} to={`/colors/${color}`} className="nav">{color}</NavLink>
            })}
        </div>
    )
}

export default ColorList;