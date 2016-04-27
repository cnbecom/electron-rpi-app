'use strict';

var RaspiCam = require("raspicam");

var camera = new RaspiCam({
	mode: "photo",
	output: "./photo/image.jpg",
	encoding: "jpg",
	timeout: 1 // take the picture immediately
});


function takePicture(){
	camera.start();
}

// callbacks
camera.on("start", function( err, timestamp ){
	console.log("photo started at " + timestamp );
});

camera.on("read", function( err, timestamp, filename ){
	console.log("photo image captured with filename: " + filename );
});

camera.on("exit", function( timestamp ){
	console.log("photo child process has exited at " + timestamp );
});
