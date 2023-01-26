//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";

let counterId;
let seconds = 0;

const counter = () => {
    console.log("start");
    if (!counterId) counterId = setInterval(renderCounter, 1000)
}

const clearCounter = (id) => {
    clearInterval(id);
    counterId = "";
    console.log("stop");
}

const restartCounter = () => {
    seconds = 0;
    console.log("restart");
}

const renderCounter = () => {
    seconds++;
    //render your react application
    ReactDOM.render(<SecondsCounter
        seconds={seconds}
        counterId={counterId}
        start={counter}
        stop={clearCounter}
        restart={restartCounter} />, document.querySelector("#app"));
}

counter();