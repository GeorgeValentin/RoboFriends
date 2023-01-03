import React from "react";

const Scroll = (props) => {
    // -> "props.children" represents what is 
    // contained inside the Parent component
    // that is around the Child
    // return props.children;

    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;