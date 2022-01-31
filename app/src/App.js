import React, { Component, useEffect } from "react";
import { ReactDOM } from "react-dom";
import * as cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser'
import { hot } from "react-hot-loader";
import "./App.css";

import TitlePage from "./Components/title";

/*
class App extends Component {

  loadAndViewImage(imageId) {

    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

    cornerstoneWADOImageLoader.configure({
        beforeSend: function(xhr) {
            // Add custom headers here (e.g. auth tokens)
            //xhr.setRequestHeader('APIKEY', 'my auth token');
        },
    });

    var loaded = false;

    const element = document.getElementById("dicomImage");
    cornerstone.enable(element);
    cornerstone.loadImage(imageId).then(function(image) {
      cornerstone.displayImage(element, image);
    });
  }

  render() {
    return (
      <div className="app-back" style={{float : 'left', paddingRight : '5px'}}>
        <div id="dicomImage" style={{width:"512px", height:"512px"}}>
        </div>
      </div>
    );
  }
}
*/

const App =  ({}) =>  {
  <div className="app-back" style={{float : 'left', paddingRight : '5px'}}>
    <div id="dicomImage" style={{width:"512px", height:"512px"}}>
    </div>
  </div>
} 


//ReactDOM.render(App, document.getElementById("root"));

export default App;
//export default hot(module)(App);
