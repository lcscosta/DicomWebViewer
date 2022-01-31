import React, {Component} from "react"
import * as cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser'


export function loadAndViewImage(imageId){
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

    cornerstoneWADOImageLoader.configure({
        beforeSend: function(xhr) {
            // Add custom headers here (e.g. auth tokens)
            //xhr.setRequestHeader('APIKEY', 'my auth token');
        },
    });

    var loaded = false;
    console.log(document.getElementById("dicomImage"));
    const element = document.getElementById("dicomImage");
    cornerstone.enable(element);
    cornerstone.loadImage(imageId).then(function(image) {
        cornerstone.displayImage(element, image);
    });

    // Add event handlers to zoom the image in and out
    document.getElementById('zoomIn').addEventListener('click', function (e) {
        const viewport = cornerstone.getViewport(element);
        viewport.scale += 0.25;
        cornerstone.setViewport(element, viewport);
    });
    document.getElementById('zoomOut').addEventListener('click', function (e) {
        const viewport = cornerstone.getViewport(element);
        viewport.scale -= 0.25;
        cornerstone.setViewport(element, viewport);
    });
    document.getElementById('reset').addEventListener('click', function (e) {
        cornerstone.reset(element);
    });
    document.getElementById('submit').addEventListener('click', function (e) {
        const uid = document.getElementById('fname')
        const imagepath =  ["wadouri:http://localhost:8042/instances/", uid.value, "/file" ]
        cornerstone.loadImage(imagepath.join('')).then(function(image) {
            cornerstone.displayImage(element, image);
        });
    });

     // add event handlers to pan image on mouse move
    element.addEventListener('mousedown', function (e) {
        let lastX = e.pageX;
        let lastY = e.pageY;
  
        function mouseMoveHandler(e) {
          const deltaX = e.pageX - lastX;
          const deltaY = e.pageY - lastY;
          lastX = e.pageX;
          lastY = e.pageY;
  
          const viewport = cornerstone.getViewport(element);
          viewport.translation.x += (deltaX / viewport.scale);
          viewport.translation.y += (deltaY / viewport.scale);
          cornerstone.setViewport(element, viewport);
        }
  
        function mouseUpHandler() {
          document.removeEventListener('mousemove', mouseMoveHandler);
          document.removeEventListener('mouseup', mouseUpHandler);
        }
  
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
  
    const mouseWheelEvents = ['mousewheel', 'DOMMouseScroll'];
    mouseWheelEvents.forEach(function(eventType) {
        element.addEventListener(eventType, function (e) {
          // Firefox e.detail > 0 scroll back, < 0 scroll forward
          // chrome/safari e.wheelDelta < 0 scroll back, > 0 scroll forward
          let viewport = cornerstone.getViewport(element);
          if (e.wheelDelta < 0 || e.detail > 0) {
            viewport.scale -= 0.25;
          } else {
            viewport.scale += 0.25;
          }
  
          cornerstone.setViewport(element, viewport);
  
          // Prevent page from scrolling
          return false;
        });
    });
}

export const CanvasPage = (loadAndViewImage) => {
    <div id="dicomImage" style={{width:"512px", height:"512px"}}>        
    </div>
}

//{loadAndViewImage("wadouri:http://localhost:8042/instances/e37b7202-49c92c9f-d57fc09a-697ff787-8905b386/file")}

