import React from 'react';
import { useParams, Link } from "react-router-dom"

const ColorPage = () => {
    const { color } = useParams();
    return(
        <div className="colorpage"style={{backgroundColor: `${color}`}}>
            <h1>THIS IS {color.toUpperCase()}</h1>
            <h1>ISN'T IT BEAUTIFUL?</h1>
            <Link to="/colors">GO BACK</Link>
        </div>
    )
}

export default ColorPage;

// how do you change the background color of the body with inline the style property?