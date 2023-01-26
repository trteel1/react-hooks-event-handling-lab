// Code EyesOnMe Component Here
import React from "react";

function focusHandler () {
     console.log("Good!")
}

function blurHandler () {
    console.log("Hey! Eyes on me!")
}

function EyesOnMe () {
return (
    <div>
        <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
    </div>
)
}
export default EyesOnMe; 
