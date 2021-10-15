import React from "react";
import { NavLink } from "react-router-dom"

const DogList = ({dogs}) => {
    return (
        <nav className="navbar">
           {dogs.map(dog => <NavLink to={`/dogs/${dog.name}`}  >{dog.name}</NavLink>)}
        </nav>
    )
}

export default DogList;