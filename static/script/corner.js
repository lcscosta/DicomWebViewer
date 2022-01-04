//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);
//import { cornerstoneWADOImageLoader } from 'cornerstone-wado-image-loader';

//var cornerstoneWADOImageLoader = require('cornerstone-wado-image-loader');
//var cornerstone = require("cornerstone-core");  
//import { cornerstoneWADOImageLoader } from "/home/dev-zeus/Treinamento/projetos/DicomWebViewer/node_modules/cornerstone-wado-image-loader";
//import { cornerstone } from "cornerstone-core";

//import { cornerstoneWADOImageLoader } from './cornerstoneWADOImageLoader.min.js';

//var cornerstoneWADOImageLoader = require('./cornerstoneWADOImageLoader.min.js');

const url = 'http://localhost' //mudar dependendo do host;

const imgUrl = 'http://localhost:8042/wado?objectUID=1.3.6.1.4.1.5962.99.1.3814087073.479799962.1489872804257.282.0&requestType=WADO'
    
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

function loadAndViewImage(imageId) {
    var element = document.getElementById('dicomImage');

    try {
        var start = new Date().getTime();
        cornerstone.loadAndCacheImage(imageId).then(function(image) {
            console.log(image);
            var viewport = cornerstone.getDefaultViewportForImage(element, image);
            cornerstone.displayImage(element, image, viewport);
            if(loaded === false) {
                cornerstoneTools.mouseInput.enable(element);
                cornerstoneTools.mouseWheelInput.enable(element);
                cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
                cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
                cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
                cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel
                loaded = true;
            }

            function getTransferSyntax() {
                const value = image.data.string('x00020010');
                return value + ' [' + uids[value] + ']';
            }

            function getSopClass() {
                const value = image.data.string('x00080016');
                return value + ' [' + uids[value] + ']';
            }

            function getPixelRepresentation() {
                const value = image.data.uint16('x00280103');
                if(value === undefined) {
                    return;
                }
                return value + (value === 0 ? ' (unsigned)' : ' (signed)');
            }

            function getPlanarConfiguration() {
                const value = image.data.uint16('x00280006');
                if(value === undefined) {
                    return;
                }
                return value + (value === 0 ? ' (pixel)' : ' (plane)');
            }


     
        }, function(err) {
            throw err;
        });
    }
    catch(err) {
        throw err;
    }
}

const imgWado = cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.load('wadouri:' + imgUrl);

loadAndViewImage('wadouri:' + url);

console.log(imgWado);
//const imageId = 'example://1';
//const element = document.getElementById('dicomImage');
//cornerstone.enable(element);
//cornerstone.loadImage(imgWado).then(function(image) {
  //  cornerstone.displayImage(element, image);
//});