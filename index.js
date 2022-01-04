process.title = 'MyWebServer';
 var args = process.argv,
   port = args[2] || 7070,
   webServer = require('./server');

 webServer.listen(port, function() {
   console.log('Server started at port ' + port);
 });

 //Require
//var cornerstone = require("cornerstone-core");
//var cornerstoneWADOImageLoader = require("cornerstone-wado-image-loader");
//var cornerstoneWADOImageLoader = require("./static/script/");