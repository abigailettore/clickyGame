import React from "react";
import "./navbar.css"

function NavBar(props){
    return( 
        <div classname="NavBar">
            <h1>Cereal Memory Game</h1>
            <p>{props.message}</p>
            <span>Score:{props.score} High Score: {props.highscore} </span>
        
        </div>
    )
}

export default NavBar;