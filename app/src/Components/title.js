import React from "react"

const TitlePage = ({title}) => 

    <div className="Page">
        <h1>{title}</h1>
        
        <label for="fname">UID:</label>
        <input type="text" id="fname" name="fname"></input>
        <button id="submit" type="button" class="btn btn-default">Submit</button>
        
        <div id="dicomImage" style={{width:"512px", height:"512px"}}>
        </div>
        <button id="zoomIn" type="button" class="btn btn-default">Zoom In</button>
        <button id="zoomOut" type="button" class="btn btn-default">Zoom Out</button>
        <button id="reset" type="button" class="btn btn-default">Reset</button>
    </div>


export default TitlePage