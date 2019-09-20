import React from "react";
import "./cards.css"

function Cards(props){
    return(
        <div className="cards">
            <div className="img-container" onClick={() => props.handleClick(props.id)}>
                <img className="imgStyling" alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default Cards;