import React from "react";
import "./grid.css";

function Grid(props){
    return (
        <div
            className="grid-1 d-container content-center">
                {props.children}
            </div>
    )
}

export default Grid;