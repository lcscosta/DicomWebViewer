import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {CanvasPage, CanvasElement, loadAndViewImage} from "./Components/canvas.js";
import TitlePage from "./Components/title.js";

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

cors(corsOptions); // Use this after the variable declaration

const titleh2 = React.createElement('h2', {}, 'My First React Code');


ReactDOM.render(
    <TitlePage title="DicomWebViewer" />,
    document.getElementById("root") || document.createElement('div')
);

loadAndViewImage("wadouri:http://localhost:8042/instances/e37b7202-49c92c9f-d57fc09a-697ff787-8905b386/file");

//<App/>
/*
<div className="dicomImage" style={{width:"512px", height:"512px"}}>
    </div>
*/