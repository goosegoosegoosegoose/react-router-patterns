import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const { name } = useParams();
    let i = null;


    for (let idx=0; idx<dogs.length; idx++) {
        if (dogs[idx].name == `${name}`) {
            console.log(dogs[idx].name);
            console.log(name);
            i = idx;
        }
    };

    return (
        <div>
            <p>Name: {dogs[i].name}</p>
            <p>Age: {dogs[i].age}</p>
            <img src={dogs[i].src} />
            <ul>
                {dogs[i].facts.map(fact => <li>{fact}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;