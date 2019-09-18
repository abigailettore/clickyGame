import React from "react";
import "./cards.css"

function Cards(props){
    return(
        <div className="playingCards">
            <div className="img-container">
                <img alt={props.name} src={props.image} className="imgStyling" />
            </div>
        </div>
    );
}

export default Cards;